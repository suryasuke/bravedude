import { db } from "../db/db.js"
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

export const postCollab = async (req, res) => {
const {email , phone} = req.body; 
try{

    const result = await db.query("SELECT * FROM collab WHERE email=$1 OR phone=$2",[email , parseInt(phone)]);
    if(result.rowCount > 0)
{
    return res.status(200).json({success: false, message : { text : "user already registered as collab try different valid details" , state : 'error'}});
}
    const value = await db.query("INSERT INTO collab (email,phone) VALUES($1,$2) RETURNING *",[email , parseInt(phone)]);
    if(value.rows.length > 0){
        try{


            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL,
                    pass : process.env.PASSGMAIL
            }});
              const mailOptions = {
  from: {
    name: "BraveDude Academy",
    address: process.env.GMAIL,
  },
  to: email,
  subject: "🎉 Welcome to BraveDude Academy - Collab Registration Successful",
  text: "Thank you for registering as a collab with BraveDude Academy! Our team will contact you soon.",
 html: `
  <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 0; background: #f9fafb;">
    
    <!-- Poster Card -->
    <div style="background: linear-gradient(135deg, #4f46e5, #9333ea); border-radius: 12px; padding: 40px 30px; color: #fff; text-align: center; box-shadow: 0 8px 20px rgba(0,0,0,0.15);">
      
      <!-- Logo / Title -->
      <h1 style="margin: 0; font-size: 26px; font-weight: 600; letter-spacing: 1px;">BraveDude Academy</h1>
      <p style="margin: 6px 0 20px; font-size: 16px; opacity: 0.9;">Collaboration Team</p>
      
      <!-- Welcome Text -->
      <h2 style="margin: 0 0 12px; font-size: 22px; font-weight: bold;">🎉 Welcome Onboard!</h2>
      <p style="margin: 0 auto 20px; font-size: 16px; line-height: 1.6; max-width: 450px;">
        Thank you for registering as a <strong>collaborator</strong> with <b>BraveDude Academy</b>.<br/>
        We’re excited to have you join our mission. Our team will reach out to you shortly with next steps.
      </p>

      <!-- Call to Action -->
      <a href="https://bravedude.com" 
         style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #fff; color: #4f46e5; font-weight: bold; font-size: 15px; border-radius: 30px; text-decoration: none; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
        🚀 Visit Our Website
      </a>
    </div>

    <!-- Footer -->
    <div style="padding: 16px; text-align: center; font-size: 13px; color: #555;">
      <p style="margin: 8px 0;">📩 Need help? Contact us at 
        <a href="mailto:support@bravedude.com" style="color: #4f46e5; text-decoration: none;">support@bravedude.com</a>
      </p>
      <p style="margin: 4px 0; font-size: 12px; color: #888;">
        © ${new Date().getFullYear()} BraveDude Academy. All Rights Reserved.
      </p>
    </div>
  </div>
`

};


          await transporter.sendMail(mailOptions);
          return res
          .status(200)
          .json({ message: {text : "Collab registered & mail sent successfully"  , state : "success"} });
      } catch (mailError) {
        console.error(mailError);
        await db.query("DELETE FROM collab WHERE email=$1 AND phone=$2", [email, parseInt(phone)]);
        return res
          .status(500)
          .json({ message: { text : "Collab saved, but mail could not be sent" , state : "error"} });
      }
       
    }

}catch(error){
 res.status(500).json({message : {text : "The value is not going to the database" , state : "error"}});
}
}