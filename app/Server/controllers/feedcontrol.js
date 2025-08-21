import { db } from '../db/db.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const SubmitFeed = async (req,res)=>{

const {name,email,rating,message} = req.body;
console.log(name)
try{
    if(!name || !email || !rating || !message){
        return res.status(400).json({message : "Please fill all the fields"});
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSGMAIL
        }
    });

   const mailOptions = {
    from : 'suryaffa648@gmail.com',
    to: email,
    subject: 'Feedback Received',
    html : `
    <h1>Thank you for your feedback, ${name}!</h1>`
    }

 try {

  const result = await db.query(
    "INSERT INTO student_feedback (name,email,rating,text) VALUES ($1,$2,$3,$4) RETURNING *",
    [name, email, parseInt(rating), message]
  );

  res.status(200).json({
    message: { text: "Your feedback is submitted", state: "success" },
    data: result.rows[0]
  });


  transporter.sendMail(mailOptions)
    .then(() => console.log('✅ Email sent'))
    .catch(err => console.error('❌ Email failed:', err));

} catch (error) {
  console.error(error);
  res.status(500).json({
    message: { text: "Database error", state: "error" }
  });
}





}
catch(err){
res.status(404).json({message : "The Feedback is not submitted an error occured"});
}
}