async function run() {
  console.log("=== 1. Unauthorized config fetch ===");
  let res = await fetch('http://localhost:3000/api/admin/config');
  console.log("Status:", res.status); // Expect 401

  console.log("\n=== 2. Login ===");
  res = await fetch('http://localhost:3000/api/admin/login', {
    method: 'POST',
    body: JSON.stringify({ password: 'scaleupaccounting@123' })
  });
  console.log("Status:", res.status); // Expect 200
  const cookies = res.headers.get('set-cookie');
  console.log("Cookie received:", cookies);

  console.log("\n=== 3. Authorized config fetch ===");
  res = await fetch('http://localhost:3000/api/admin/config', {
    headers: { 'Cookie': cookies }
  });
  console.log("Status:", res.status); // Expect 200
  console.log("Config keys:", Object.keys((await res.json()).config));
}

run().catch(console.error);
