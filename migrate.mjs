import { loadEnvConfig } from '@next/env';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnvConfig(__dirname);

import { sql } from './src/lib/db.js';

async function migrate() {
  console.log("Running migration to ensure partial unique index exists...");
  try {
    await sql`
      CREATE UNIQUE INDEX IF NOT EXISTS uq_confirmed_slot 
      ON bookings (slot_date, slot_time) 
      WHERE status = 'confirmed';
    `;
    console.log("Migration successful: uq_confirmed_slot exists.");
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
