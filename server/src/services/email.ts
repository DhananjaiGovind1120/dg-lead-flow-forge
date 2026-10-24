import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Initialize SendGrid with your API key
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
}

sgMail.setApiKey(apiKey || '');

export const sendDemoConfirmationEmail = async (to: string, name: string, date: string | Date) => {
  if (!apiKey) {
    throw new Error('SendGrid API key is not configured');
  }

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  }).format(dateObj);

  const msg = {
    to,
    from: 'dhananjaigovind2000@gmail.com', // Your verified sender
    subject: 'Demo Scheduled - Grace automations',
    html: `
      <h1>Demo Confirmation</h1>
      <p>Hi ${name},</p>
      <p>Your demo has been scheduled for ${formattedDate}.</p>
      <p>We're looking forward to showing you how our AI solutions can transform your business processes.</p>
      <p>If you need to reschedule or have any questions, please don't hesitate to contact us.</p>
      <br>
      <p>Best regards,</p>
      <p>The Grace automations Team</p>
    `
  };

  try {
    await sgMail.send(msg);
    console.log('Demo confirmation email sent successfully to:', to);
    return true;
  } catch (error: any) {
    console.error('Error sending demo confirmation email:', {
      error: error.message,
      code: error.code,
      response: error.response,
    });
    throw error;
  }
};

export const sendAdminNotificationEmail = async (demoDetails: any) => {
  if (!apiKey) {
    throw new Error('SendGrid API key is not configured');
  }

  const dateObj = typeof demoDetails.date === 'string' ? new Date(demoDetails.date) : demoDetails.date;
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  }).format(dateObj);

  const msg = {
    to: 'dhananjaigovind2000@gmail.com', // Admin email
    from: 'dhananjaigovind2000@gmail.com', // Your verified sender
    subject: 'New Demo Scheduled',
    html: `
      <h1>New Demo Scheduled</h1>
      <p>A new demo has been scheduled with the following details:</p>
      <ul>
        <li>Name: ${demoDetails.name}</li>
        <li>Company: ${demoDetails.company}</li>
        <li>Email: ${demoDetails.email}</li>
        <li>Phone: ${demoDetails.phone}</li>
        <li>Date: ${formattedDate}</li>
        <li>Message: ${demoDetails.message || 'No message provided'}</li>
      </ul>
    `
  };

  try {
    await sgMail.send(msg);
    console.log('Admin notification email sent successfully');
    return true;
  } catch (error: any) {
    console.error('Error sending admin notification email:', {
      error: error.message,
      code: error.code,
      response: error.response,
    });
    throw error;
  }
};