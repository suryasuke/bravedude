import { db } from '../db/db.js';
import nodemailer from 'nodemailer';
import { sendMail } from '../config/mailer.js';
import dotenv from 'dotenv';
dotenv.config();

export const workshopRegister = async (req, res) => {
  const { name, email, F_name, contact } = req.body;

  try {
   await sendMail({
  to: email,
  subject: `Thanks for registering, ${name}!`,
  text: `Hi ${F_name} from ${name},\n\nThank you for registering for our upcoming workshop at BraveDude Academy. We're excited to have you on board. Our team will review your submission and contact you shortly with the event details and next steps.\n\nStay tuned!\n\nRegards,\nFounder of BraveDude Academy`,
  html: `
    <div style="background-color: #000000; color: #ffffff; font-family: Poppins, Arial, sans-serif; padding: 20px;">
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 20px;">
        BraveDude Academy
      </div>
      <div style="font-size: 16px; line-height: 1.7;">
        <p>Hi <strong>${F_name}</strong> from <strong>${name}</strong>,</p>
        <p>Thank you for registering for our upcoming workshop at BraveDude Academy. We're thrilled to welcome you to our growing community of learners and innovators.</p>
        <p>Our team has received your registration and will review your details shortly. You'll receive another email soon with all the event information — including the schedule, materials, and how to join.</p>
        <p>In the meantime, if you have any questions, feel free to reach out to us through our contact page or reply to this email.</p>
        <p>We’re looking forward to helping you grow and learn with us!</p>
      </div>
      <div style="margin-top: 40px; font-style: italic;">
        Regards,<br/>
        Founder of BraveDude Academy
      </div>
    </div>
  `
});



await sendMail({
  to: process.env.GMAIL,
  subject: `New College Registered: ${name}`,
  text: `
New college registration received.

College Name: ${name}
Representative: ${F_name}
Email: ${email}
Contact Number: ${contact}

Please follow up with them soon.

Regards,
BraveDude Academy System
  `,
  html: `
    <div style="background-color: #000000; color: #ffffff; font-family: Poppins, Arial, sans-serif; padding: 20px;">
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 20px;">
        BraveDude Academy – New Registration Alert
      </div>
      <div style="font-size: 16px; line-height: 1.7;">
        <p><strong>A new college has just registered for your workshop.</strong></p>
        <p>Here are the details:</p>
        <ul>
          <li><strong>College Name:</strong> ${name}</li>
          <li><strong>Representative Name:</strong> ${F_name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Contact Number:</strong> ${contact}</li>
        </ul>
        <p>Please follow up with them as soon as possible to confirm their registration and provide further instructions.</p>
      </div>
      <div style="margin-top: 40px; font-style: italic;">
        This is an automated message from BraveDude Academy's system.
      </div>
    </div>
  `
});




    res.status(200).json({ message: 'Registration successful. Confirmation email sent.' });
  } catch (err) {
    console.error('Error in workshop registration:', err);
    res.status(500).json({
      message: 'The details were not posted. Please visit our contact page.',
      error: err.message || err
    });
  }
};
