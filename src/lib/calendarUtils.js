import ical, { ICalCalendarMethod } from 'ical-generator';
import { generateCalendarUid, getTrueUtcDate } from './bookingUtils';

/**
 * Generates an .ics string for email attachment.
 * Supports Google Calendar, Outlook, and Apple Calendar.
 * Uses METHOD:REQUEST to enable Accept/Decline buttons in Outlook.
 */
export function generateIcs(booking, config) {
  const calendar = ical({ name: 'ScaleUp Accounting Booking' });
  calendar.method(ICalCalendarMethod.REQUEST);

  // Construct the UTC equivalent of the London time using our robust timezone logic
  const startObj = getTrueUtcDate(booking.slot_date, booking.slot_time, config.timezone);
  
  const event = calendar.createEvent({
    id: generateCalendarUid(booking.booking_ref),
    start: startObj,  
    timezone: 'Europe/London',
    summary: `ScaleUp Consultation: ${booking.service}`,
    description: `Booking Reference: ${booking.booking_ref}\nName: ${booking.name}\nPhone: ${booking.phone}\nNotes: ${booking.notes || 'None'}\n\nTo cancel or reschedule, please use the link in your email.`,
    location: 'Online / Phone',
    organizer: {
      name: 'ScaleUp Accounting',
      email: config.adminEmail
    }
  });

  // Calculate end time based on config duration
  const endObj = new Date(startObj.getTime() + config.slotDurationMin * 60000);
  event.end(endObj);

  return calendar.toString();
}

/**
 * Generates a direct Google Calendar 'Add to Calendar' URL.
 */
export function generateGoogleCalendarUrl(booking, config) {
  const [hh, mm] = booking.slot_time.split(':');
  
  // Google Calendar format requires basic YYYYMMDDTHHMMSSZ (UTC) or without Z for local
  // For timezone support, we can use local time without Z and specify ctz=Europe/London
  const dateStr = booking.slot_date.replace(/-/g, '');
  const startStr = `${dateStr}T${hh}${mm}00`;
  
  const endObj = new Date(new Date(`1970-01-01T${hh}:${mm}:00`).getTime() + config.slotDurationMin * 60000);
  const endHh = String(endObj.getUTCHours()).padStart(2, '0');
  const endMm = String(endObj.getUTCMinutes()).padStart(2, '0');
  const endStr = `${dateStr}T${endHh}${endMm}00`;

  const text = encodeURIComponent(`ScaleUp Consultation: ${booking.service}`);
  const details = encodeURIComponent(`Booking Reference: ${booking.booking_ref}\nNotes: ${booking.notes || 'None'}`);
  const location = encodeURIComponent('Online / Phone');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startStr}/${endStr}&ctz=Europe/London&text=${text}&details=${details}&location=${location}`;
}
