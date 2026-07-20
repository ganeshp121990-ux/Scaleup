import pkg from '@next/env';
const { loadEnvConfig } = pkg;
loadEnvConfig(process.cwd());

import { sql } from './src/lib/db.js';
console.log('Using DB URL:', process.env.DATABASE_URL);
sql`SELECT 1 as connected`.then(res => {
  console.log('Connected:', res);
  return sql`SELECT * FROM booking_config`;
}).then(res => {
  console.log('booking_config:', res);
}).catch(console.error);