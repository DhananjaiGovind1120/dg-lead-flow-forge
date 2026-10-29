import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_lib/supabase.js';

const requiredFields = ['name', 'business_name', 'phone', 'business_type', 'date'];

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
        business_name: demoData.business_name,
        phone: demoData.phone,
        business_type: demoData.business_type,
        time_drain: demoData.time_drain || null,
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

    return res.status(200).json({ message: 'Demo scheduled successfully', demo: data });
  } catch (err) {
    console.error('Error scheduling demo:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
