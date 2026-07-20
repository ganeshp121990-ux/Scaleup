import crypto from 'crypto';

/**
 * Returns whether a given date string (YYYY-MM-DD) is a working day,
 * checking against the configured workingDays and any specific blockedDates.
 */
export async function isWorkingDay(dateStr, config, sqlClient) {
  // 1. Check if it's a blocked date or holiday in the DB
  if (sqlClient) {
    try {
      const blocked = await sqlClient`SELECT id FROM blocked_dates WHERE blocked_date = ${dateStr}`;
      if (blocked.length > 0) return false;
    } catch (e) {
      console.warn("Failed to check blocked dates", e.message);
    }
  }

  // 2. Check day of week
  const dateObj = new Date(dateStr); // UTC representation of the date
  const dayOfWeek = dateObj.getUTCDay(); // 0 is Sunday, 1 is Monday
  
  if (!config.workingDays.includes(dayOfWeek)) {
    return false;
  }

  return true;
}

/**
 * Generates all candidate slot strings (e.g. ["09:00", "10:30"]) for a given date.
 */
export function generateSlots(dateStr, config) {
  const slots = [];
  const startParts = config.workingStart.split(':').map(Number);
  const endParts = config.workingEnd.split(':').map(Number);
  
  let currentMinutes = startParts[0] * 60 + startParts[1];
  const endMinutes = endParts[0] * 60 + endParts[1];
  
  const stepMinutes = config.slotDurationMin + config.bufferMin;

  while (currentMinutes + config.slotDurationMin <= endMinutes) {
    const h = Math.floor(currentMinutes / 60);
    const m = currentMinutes % 60;
    const hh = String(h).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    slots.push(`${hh}:${mm}`);
    currentMinutes += stepMinutes;
  }

  return slots;
}

/**
 * Computes the true UTC Date for a given date and time in a specific timezone.
 */
export function getTrueUtcDate(dateStr, timeStr, timezone) {
  const [hh, mm] = timeStr.split(':');
  
  // We guess the UTC time is the same as the local time string
  const guessUtc = new Date(`${dateStr}T${hh}:${mm}:00Z`);
  
  // Format this guessed UTC time in the target timezone
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });
  
  const formatted = formatter.format(guessUtc);
  const [datePart, timePart] = formatted.split(', ');
  const [dd, MM, yyyy] = datePart.split('/');
  const [fH, fM, fS] = timePart.split(':');
  
  const formattedUtc = new Date(`${yyyy}-${MM}-${dd}T${fH}:${fM}:${fS}Z`);
  
  // The difference gives the timezone offset
  const offsetMs = formattedUtc.getTime() - guessUtc.getTime();
  
  // True UTC timestamp
  return new Date(guessUtc.getTime() - offsetMs);
}

/**
 * Filters out slots that are less than minNoticeHours away.
 * Uses Europe/London timezone for all current-time calculations.
 */
export function applyMinNotice(slots, dateStr, config) {
  const nowMs = Date.now();
  
  return slots.filter(slot => {
    const trueUtcDate = getTrueUtcDate(dateStr, slot, config.timezone);
    const diffHours = (trueUtcDate.getTime() - nowMs) / (1000 * 60 * 60);
    
    return diffHours >= config.minNoticeHours;
  });
}

/**
 * Parses "09:00 AM" or "01:30 PM" into 24-hour "09:00" or "13:30".
 */
export function parseTimeSlot(displayTime) {
  if (!displayTime) return "";
  const [time, modifier] = displayTime.split(' ');
  if (!modifier) return displayTime; // Already 24h
  
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

/**
 * Formats 24-hour "13:30" back to "01:30 PM".
 */
export function formatTimeSlot(dbTime) {
  if (!dbTime) return "";
  // dbTime might be HH:MM or HH:MM:SS
  const [hoursStr, minutes] = dbTime.split(':');
  let hours = parseInt(hoursStr, 10);
  const modifier = hours >= 12 ? 'PM' : 'AM';
  
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }
  
  return `${String(hours).padStart(2, '0')}:${minutes} ${modifier}`;
}

/**
 * Converts a JS Date to "YYYY-MM-DD" in Europe/London.
 */
export function toISODate(jsDate) {
  if (!jsDate) return null;
  const formatter = new Intl.DateTimeFormat('en-CA', { // en-CA uses YYYY-MM-DD
    timeZone: 'Europe/London',
    year: 'numeric', month: '2-digit', day: '2-digit'
  });
  return formatter.format(new Date(jsDate));
}

/**
 * Generates a unique booking reference.
 */
export function generateBookingRef(dateStr, prefix = 'SCL') {
  const datePart = dateStr.replace(/-/g, '');
  const randomPart = crypto.randomBytes(3).toString('hex').toUpperCase(); // 6 chars
  return `${prefix}-${datePart}-${randomPart}`;
}

/**
 * Computes a deterministic SHA-256 idempotency key.
 */
export function computeIdempotencyKey(email, date, time) {
  const normalizedEmail = (email || '').trim().toLowerCase();
  const normalizedTime = parseTimeSlot(time);
  return crypto.createHash('sha256')
    .update(`${normalizedEmail}|${date}|${normalizedTime}`)
    .digest('hex');
}

/**
 * Generates a stable iCal UID for a booking.
 */
export function generateCalendarUid(bookingRef) {
  return `${bookingRef}@scaleupaccounting.uk`;
}
