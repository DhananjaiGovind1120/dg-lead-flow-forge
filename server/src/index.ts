import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { sendDemoConfirmationEmail, sendAdminNotificationEmail } from './services/email';
import { createCalendarEvent } from './services/calendar';
import path from 'path';

// Load environment variables with explicit path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Debug environment variables
console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Set' : 'Not Set');
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set');

const app = express();
const port = process.env.PORT || 3001;

// Server-side Supabase client. The service role key bypasses RLS, so it must never reach the browser.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in server/.env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
});

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

    const { data, error } = await supabase
      .from('leads')
      .insert({ email, source: 'get_started' })
      .select()
      .single();

    if (error) {
      console.error('Error capturing lead:', error);
      return res.status(500).json({
        error: 'Failed to capture lead',
        details: error.message,
        code: error.code
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
      lead: data
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

    const { data, error } = await supabase
      .from('demos')
      .insert({
        name: demoData.name,
        email: demoData.email,
        company: demoData.company,
        phone: demoData.phone,
        message: demoData.message || null,
        meeting_at: new Date(demoData.date).toISOString(),
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting demo request:', error);
      return res.status(500).json({
        error: 'Failed to schedule demo',
        details: error.message,
        code: error.code
      });
    }

    // Send confirmation email
    try {
      await sendDemoConfirmationEmail(demoData.email, demoData.name, demoData.date);
      await sendAdminNotificationEmail(demoData);
      await createCalendarEvent(demoData);

      res.status(200).json({
        message: 'Demo scheduled successfully',
        demo: data
      });
    } catch (error: any) {
      console.error('Error in post-notification operations:', error);
      // Still return success since the demo request was received
      res.status(200).json({
        message: 'Demo scheduled, but there were some issues with notifications',
        demo: data
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
