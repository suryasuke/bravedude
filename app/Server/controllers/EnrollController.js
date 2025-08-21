import { db } from "../db/db.js";
import { sendMail } from "../config/mailer.js";
import { addStudentToSheet } from '../config/googlesheets.js'

export const getStudents = async (res) => {
  try {
    const result = await db.query("SELECT * FROM students_enroll ORDER BY id DESC");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const submitEnroll = async (req, res) => {
  const { name, phone, degree, location, email, course } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM students_enroll WHERE email=$1 AND phone=$2",
      [email, phone]
    );

    if (result.rowCount > 0) {
      return res
        .status(200)
        .json({
          success: false,
          message: { error: "User already enrolled, try different valid details" },
        });
    }

    await db.query(
      "INSERT INTO students_enroll (name, phone, degree, email, course_name, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, phone, degree, email, course, location]
    );

    await addStudentToSheet({ name, phone, degree, email, course, location });


    
 await sendMail({
  to: email,
  subject: "Enrollment Successful 🎉",
  html: `
  <div style="background-color: #000000; color: #ffffff; padding: 20px; font-family: 'Poppins', sans-serif; line-height: 1.6; text-align: left;">
    <h2 style="margin-bottom: 10px; color: #FFD700;">BraveDude Academy</h2>

    <p>Hi ${name},</p>

    <p>Congratulations on successfully enrolling in the <b>${course}</b> program at <b>BraveDude Academy</b>! 🎉</p>

    <p>We’re thrilled to have you join our community of learners. At BraveDude Academy, we are committed to providing 
    <b>high-quality training, hands-on learning,</b> and the right guidance to help you achieve your career goals.</p>

    <p>Our team will connect with you soon regarding the <b>next steps, schedules,</b> and resources to get you started. 
    In the meantime, if you have any questions, feel free to reach out — we’re always here to support you.</p>

    <p><i>Wishing you great success ahead with your learning journey!</i></p>

    <br/>
    <p>Warm regards,</p>
    <p><b>S. Surya</b><br/>
    Founder & CEO<br/>
    BraveDude Academy</p>

    <p>📧 bravedudeacademy@gmail.com<br/>
    📞 +91 81109 74040<br/>
    🌐 <a href="https://suryachronicle.netlify.app" style="color: #FFD700;">suryachronicle.netlify.app</a></p>
  </div>
  `
});

    try{
        await sendMail({
      to: process.env.GMAIL,
      subject : 'new student regitserd for course!!!',
      text : `${name} regitsered for ${course} 
      
      to contact him go through this ${phone} or ${email}`
    })
    }catch{
    console.log("Mail didnt receive");
    }
    
    res.status(200).json({
      success: true,
      message: {
        text: "Mail sent successfully",
        done: "Successfully enrolled! Our team will get back to you soon!!",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
