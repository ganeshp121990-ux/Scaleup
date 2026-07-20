import { Pool, neonConfig, neon } from '@neondatabase/serverless';
import ws from 'ws';

// Required for true transactions in Node/Edge environments
if (!neonConfig.webSocketConstructor) {
  neonConfig.webSocketConstructor = ws;
}

// Standard HTTP client for fast, single queries (e.g. availability check)
export const sql = neon(process.env.DATABASE_URL || 'postgresql://user:pass@host/db');

// Pool client for true transactions
let pool;

export function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL || 'postgresql://user:pass@host/db' });
  }
  return pool;
}

/**
 * Wraps a callback in a robust BEGIN/COMMIT/ROLLBACK block.
 */
export async function withTransaction(fn) {
  const p = getPool();
  const client = await p.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

/**
 * Idempotent DB initialization. 
 * Creates tables and constraints if they don't exist.
 */
export async function initDb(seedDefaults = null) {
  return await withTransaction(async (client) => {
    await client.query(`
      CREATE TABLE IF NOT EXISTS booking_config (
        key   TEXT PRIMARY KEY,
        value JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id              BIGSERIAL    PRIMARY KEY,
        booking_ref     TEXT         NOT NULL UNIQUE,
        service         TEXT         NOT NULL,
        slot_date       DATE         NOT NULL,
        slot_time       TIME         NOT NULL,
        name            TEXT         NOT NULL,
        email           TEXT         NOT NULL,
        phone           TEXT         NOT NULL,
        notes           TEXT,
        status          TEXT         NOT NULL DEFAULT 'confirmed',  
        idempotency_key CHAR(64)     NOT NULL UNIQUE,  
        created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
        cancelled_at    TIMESTAMPTZ
      )
    `);

    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS uq_confirmed_slot
      ON bookings (slot_date, slot_time)
      WHERE status = 'confirmed'
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings (slot_date)
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS blocked_dates (
        id           SERIAL PRIMARY KEY,
        blocked_date DATE NOT NULL UNIQUE,
        reason       TEXT,
        created_at   TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    if (seedDefaults) {
      for (const [key, value] of Object.entries(seedDefaults)) {
        await client.query(`
          INSERT INTO booking_config (key, value, updated_at)
          VALUES ($1, $2, NOW())
          ON CONFLICT (key) DO NOTHING
        `, [key, JSON.stringify(value)]);
      }
    }
  });
}
