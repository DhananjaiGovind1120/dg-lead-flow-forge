import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendDemoConfirmationEmail, sendAdminNotificationEmail } from './services/email';
import { createCalendarEvent } from './services/calendar';
import path from 'path';

// Load environment variables with explicit path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Debug environment variables
console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set');

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://192.168.0.54:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Get Started endpoint for capturing leads
app.post('/api/capture-lead', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: 'Email is required'
      });
    }

    // Send notification to admin about new lead
    try {
      await sendAdminNotificationEmail({
        email,
        type: 'new_lead',
        source: 'get_started'
      });
    } catch (error) {
      console.error('Error sending admin notification:', error);
    }

    res.status(200).json({
      message: 'Lead captured successfully',
      lead: { email, source: 'get_started' }
    });
  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Demo scheduling endpoint
app.post('/api/schedule-demo', async (req: Request, res: Response) => {
  try {
    const demoData = req.body;

    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'phone', 'date'];
    const missingFields = requiredFields.filter(field => !demoData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Missing required fields',
        missingFields
      });
    }

    // Send confirmation email
    try {
      await sendDemoConfirmationEmail(demoData.email, demoData.name, demoData.date);
      await sendAdminNotificationEmail(demoData);
      await createCalendarEvent(demoData);

      res.status(200).json({
        message: 'Demo scheduled successfully',
        demo: { ...demoData, status: 'pending' }
      });
    } catch (error: any) {
      console.error('Error in post-notification operations:', error);
      // Still return success since the demo request was received
      res.status(200).json({
        message: 'Demo scheduled, but there were some issues with notifications',
        demo: { ...demoData, status: 'pending' }
      });
    }
  } catch (error) {
    console.error('Error scheduling demo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
