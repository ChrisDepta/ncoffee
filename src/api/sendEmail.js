'use client'
// pages/api/sendEmail.js
import Resend from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend({
  apiKey: process.env.RESEND_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: 'Proszę wypełnić wszystkie pola formularza.' });
      return;
    }

    try {
      await resend.send({
        from: 'onboarding@resend.dev',
        to: process.env.EMAIL,
        subject: 'Nowa wiadomość z formularza',
        text: `Imię: ${name}\nEmail: ${email}\nWiadomość: ${message}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Wystąpił błąd podczas wysyłania wiadomości.' });
    }
  } else {
    res.status(405).json({ error: 'Metoda nieobsługiwana' });
  }
}
