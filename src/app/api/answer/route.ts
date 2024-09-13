import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { autoAnswerTemplate } from '@/utils/autoAnswerTemplate';

export async function POST(request: NextRequest) {
  const { email, name, message, to } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to,
    subject: `Automatyczna odpowiedź od NCOFFEE`,
    html: autoAnswerTemplate({ name, email, message }),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err, info) {
        if (!err) {
          console.log('E-mail wysłany:', info);
          resolve('Wysłana');
        } else {
          console.error('Błąd wysyłania e-maila:', err);
          reject(err.message);
        }
      });
    });
  
  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Wiadomość została wysłana' });
  } catch (err) {
    console.error('Błąd:', err);
    return NextResponse.json({ error: `Nie udało się wysłać wiadomości: ${err}` }, { status: 500 });
  }
}

