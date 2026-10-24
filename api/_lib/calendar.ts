import { google } from 'googleapis';

const calendar = google.calendar('v3');

// Initialize the Google Calendar API client
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

export const createCalendarEvent = async (demoDetails: any) => {
  try {
    const event = {
      summary: `Demo: ${demoDetails.company}`,
      description: `
        Demo with ${demoDetails.name} from ${demoDetails.company}
        Email: ${demoDetails.email}
        Phone: ${demoDetails.phone}
        Message: ${demoDetails.message || 'No message provided'}
      `,
      start: {
        dateTime: new Date(demoDetails.date).toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: new Date(new Date(demoDetails.date).getTime() + 60 * 60 * 1000).toISOString(), // 1 hour duration
        timeZone: 'Asia/Kolkata',
      },
      attendees: [
        { email: demoDetails.email },
        { email: 'dhananjaigovind2000@gmail.com' },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    };

    const response = await calendar.events.insert({
      auth,
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all',
    }).then(res => res.data);

    return response.id;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}; 