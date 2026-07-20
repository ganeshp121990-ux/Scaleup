import { sql } from './db';

// Hardcoded defaults. Used only to initialize or fallback if DB fails.
export const DEFAULTS = {
  timezone: 'Europe/London',
  workingDays: [1, 2, 3, 4, 5],        // Mon–Fri
  workingStart: '09:00',
  workingEnd:   '17:30',
  slotDurationMin: 60,
  bufferMin: 30,
  minNoticeHours: 3,
  bookingRefPrefix: 'SCL',
  adminEmail: 'info@scaleupaccounting.uk',
  fromAddress: 'Scaleup Accounting <info@scaleupaccounting.uk>',
};

// Very simple in-memory cache for the config to avoid querying the DB on every single request
let cachedConfig = null;
let cacheTime = 0;
const CACHE_TTL_MS = 60000; // 60 seconds

/**
 * Fetches the booking config from the database.
 * Merges any DB overrides on top of the hardcoded defaults.
 */
export async function getConfig() {
  const now = Date.now();
  if (cachedConfig && (now - cacheTime < CACHE_TTL_MS)) {
    return cachedConfig;
  }

  let dbConfig = {};
  try {
    // Attempt to fetch all config keys from the DB
    const rows = await sql`SELECT key, value FROM booking_config`;
    for (const row of rows) {
      dbConfig[row.key] = row.value;
    }
  } catch (err) {
    console.warn("Failed to fetch booking config from DB, using defaults:", err.message);
  }

  cachedConfig = {
    ...DEFAULTS,
    ...dbConfig
  };
  cacheTime = now;

  return cachedConfig;
}

/**
 * Updates a configuration key in the database and invalidates the cache.
 */
export async function setConfig(key, value) {
  await sql`
    INSERT INTO booking_config (key, value, updated_at)
    VALUES (${key}, ${JSON.stringify(value)}, NOW())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
  `;
  cachedConfig = null; // Invalidate cache
}
