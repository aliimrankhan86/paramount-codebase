import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'providenc.hegmann62@ethereal.email',
        pass: 'g32FpZgyxJKsY82rjq'
      }
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'test@example.com',
        subject: subject,
        text: message,
        html: `<p>${message}</p>`,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 