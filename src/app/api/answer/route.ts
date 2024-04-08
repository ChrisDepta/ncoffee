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
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Wysłana');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Send' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}