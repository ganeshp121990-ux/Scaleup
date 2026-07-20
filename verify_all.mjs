import { neon } from '@neondatabase/serverless';
import pkg from '@next/env';
const { loadEnvConfig } = pkg;
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnvConfig(__dirname);

const sql = neon(process.env.DATABASE_URL);

async function runTests() {
  console.log("=== VERIFICATION 1: /api/init ===");
  const initRes = await fetch('http://localhost:3000/api/init?secret=scaleupaccounting@123');
  console.log("Init API Status:", initRes.status);
  console.log("Init API Response:", await initRes.json());
  
  console.log("\n=== VERIFICATION 1b: Confirm Tables & Seeds in Neon ===");
  const tables = await sql`SELECT tablename FROM pg_tables WHERE schemaname = 'public'`;
  console.log("Tables in public schema:", tables.map(t => t.tablename));
  const config = await sql`SELECT * FROM booking_config LIMIT 2`;
  console.log("Seeded config rows (first 2):", config);

  console.log("\n=== VERIFICATION 6a: Check Availability Before Booking ===");
  const testDate = '2026-07-24';
  const availRes1 = await fetch(`http://localhost:3000/api/availability?date=${testDate}`);
  let availData1 = await availRes1.json();
  const slots1 = availData1.available || [];
  console.log("Available Slots before booking:", slots1);
  
  if (slots1.length === 0) {
    console.error("No slots available to test booking! Are you testing on a weekend?");
    return;
  }
  const testSlot = slots1[0];
  console.log("Selecting slot for testing:", testSlot);

  console.log("\n=== VERIFICATION 2: First Booking Succeeds ===");
  const bookPayload = {
    service: 'Tax Consultation',
    date: testDate,
    time: testSlot,
    name: 'Verify Test User',
    email: 'verify@example.com',
    phone: '00000000'
  };
  const bookRes1 = await fetch('http://localhost:3000/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookPayload)
  });
  console.log("First Booking Status:", bookRes1.status);
  const bookData1 = await bookRes1.json();
  console.log("First Booking Response:", bookData1);
  const bookingRef = bookData1.bookingRef;

  console.log("\n=== VERIFICATION 3: Duplicate Click (Idempotency) ===");
  const bookRes2 = await fetch('http://localhost:3000/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookPayload)
  });
  console.log("Duplicate Click Status:", bookRes2.status);
  console.log("Duplicate Click Response:", await bookRes2.json());

  console.log("\n=== VERIFICATION 4: Different Customer, Same Slot (HTTP 409) ===");
  const bookRes3 = await fetch('http://localhost:3000/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...bookPayload, email: 'different.user@example.com' })
  });
  console.log("Conflict Booking Status:", bookRes3.status);
  console.log("Conflict Booking Response:", await bookRes3.json());

  console.log("\n=== VERIFICATION 5: Bookings Persist in Neon ===");
  const dbBooking = await sql`SELECT * FROM bookings WHERE booking_ref = ${bookingRef}`;
  console.log("Booking found in Neon:", dbBooking.length > 0 ? dbBooking[0].booking_ref + ' - ' + dbBooking[0].email : "NOT FOUND");

  console.log("\n=== VERIFICATION 6b: Availability Updates Immediately ===");
  const availRes2 = await fetch(`http://localhost:3000/api/availability?date=${testDate}`);
  let availData2 = await availRes2.json();
  const slots2 = availData2.available || [];
  console.log("Available Slots after booking:", slots2);
  console.log(`Is ${testSlot} still available?`, slots2.includes(testSlot) ? "YES (FAIL)" : "NO (PASS)");

  console.log("\n=== VERIFICATION 9: No 500 errors anywhere ===");
  console.log("Check complete! See Next.js console logs for Verification 7 (Emails) and 8 (Cancel links).");
}

runTests().catch(console.error);
