import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,       
        pass: process.env.GMAIL_PASS,      
      },
    });

    const mailOptions = {
      from: user_email,
      to: process.env.GMAIL_USER,
      subject: `New message from ${user_name} (Portfolio Site)`,
      text: message,
      replyTo: user_email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (err: unknown) {
    const error = err as any;
    console.error('[Nodemailer ERROR]', error?.response?.data || error?.message || error);
    res.status(500).json({ success: false, error: 'Email sending failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
