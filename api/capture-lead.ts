import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from './_lib/supabase.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body ?? {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
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
        code: error.code,
      });
    }

    return res.status(200).json({ message: 'Lead captured successfully', lead: data });
  } catch (err) {
    console.error('Error capturing lead:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
