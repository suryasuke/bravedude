import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service :'gmail',
    auth : {
        user : process.env.GMAIL,
        pass : process.env.PASSGMAIL
    }
})

export const sendMail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"BraveDude" <${process.env.GMAIL}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Mail sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Mail error:", error);
    throw error;
  }
};
