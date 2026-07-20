import * as jose from 'jose';

// Secret for HMAC signatures and JWTs. In production, this MUST be set in env vars.
const JWT_SECRET = process.env.JWT_SECRET || (process.env.NODE_ENV !== 'production' ? 'fallback-dev-secret-do-not-use-in-prod-1234567890' : undefined);

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is missing in production.");
}

const jwtSecretKey = new TextEncoder().encode(JWT_SECRET);

/**
 * Generates a signed token for customer actions (like cancellation).
 * Includes the bookingRef, the action type, and an expiration.
 */
export async function generateActionToken(bookingRef, action = 'cancel', expiresInHours = 72) {
  const jwt = await new jose.SignJWT({ ref: bookingRef, action })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${expiresInHours}h`)
    .sign(jwtSecretKey);
    
  return jwt;
}

/**
 * Verifies a customer action token.
 * Returns the payload (e.g. { ref: 'SCL-...', action: 'cancel' }) if valid, or null.
 */
export async function verifyActionToken(token) {
  try {
    if (!token || typeof token !== 'string') return null;
    
    const { payload } = await jose.jwtVerify(token, jwtSecretKey);
    return payload;
  } catch (err) {
    return null;
  }
}

/**
 * Creates an admin session JWT (HTTP-Only Cookie suitable).
 */
export async function createAdminToken(payload) {
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(jwtSecretKey);
    
  return jwt;
}

/**
 * Verifies an admin session JWT (from Edge Middleware).
 */
export async function verifyAdminToken(token) {
  try {
    const { payload } = await jose.jwtVerify(token, jwtSecretKey);
    return payload;
  } catch (err) {
    return null;
  }
}
