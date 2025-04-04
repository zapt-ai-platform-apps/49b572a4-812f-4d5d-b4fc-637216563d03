import { Resend } from 'resend';
import Sentry from './_sentry.js';

export default async function handler(req, res) {
  console.log('Contact form submission received');
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log('Sending email via Resend');
    
    const { data, error } = await resend.emails.send({
      from: 'Buzzarketing <onboarding@resend.dev>',
      to: 'hello@buzzarketing.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Resend response:', data);
    
    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    Sentry.captureException(error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}