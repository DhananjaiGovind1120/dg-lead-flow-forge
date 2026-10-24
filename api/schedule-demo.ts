import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_lib/supabase.js';
import { sendDemoConfirmationEmail, sendAdminNotificationEmail } from './_lib/email.js';
import { createCalendarEvent } from './_lib/calendar.js';

const requiredFields = ['name', 'email', 'company', 'phone', 'date'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const demoData = req.body ?? {};

    const missingFields = requiredFields.filter((field) => !demoData[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({ error: 'Missing required fields', missingFields });
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
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting demo request:', error);
      return res.status(500).json({
        error: 'Failed to schedule demo',
        details: error.message,
        code: error.code,
      });
    }

    try {
      await sendDemoConfirmationEmail(demoData.email, demoData.name, demoData.date);
      await sendAdminNotificationEmail(demoData);
      await createCalendarEvent(demoData);

      return res.status(200).json({ message: 'Demo scheduled successfully', demo: data });
    } catch (err) {
      console.error('Error in post-notification operations:', err);
      // The demo was saved, so still report success
      return res.status(200).json({
        message: 'Demo scheduled, but there were some issues with notifications',
        demo: data,
      });
    }
  } catch (err) {
    console.error('Error scheduling demo:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
