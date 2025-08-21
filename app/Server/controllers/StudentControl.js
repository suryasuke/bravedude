
import { db } from '../db/db.js';

import PDFDocument from "pdfkit";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
import { generateVerificationId } from '../utils/GenerateCertificate.js';

dotenv.config();

export const addstudent = async (req, res) => {
    const { name, email, phone, course, dob } = req.body;

  try {
    const prev = await db.query('SELECT * FROM enrolled_students WHERE email = $1 AND phone = $2', [email, phone])
    if(prev.rowCount > 0){
      return res.status(200).json({message : {text : "User already enrolled" , state : 'error'}})
    }
    const result = await db.query('INSERT INTO enrolled_students (name, email, phone, course, date_of_birth) VALUES ($1, $2, $3, $4, $5) RETURNING *',[name, email, phone, course, dob]);
    res.json({ success: true, data: result.rows, message : {text :'Student Registered successfully !!!' , state : 'success'} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getStudent = async (req,res)=>{

  const {email, dob, phone}=  req.body
  console.log(email, dob, phone, "in getStudent");

  try{
       const studId = await db.query("SELECT * FROM enrolled_students WHERE email = $1 AND phone = $2 AND date_of_birth = $3",[email,phone,dob])
        if(studId.rowCount === 0){
          return res.status(200).json({message : {text : "The student didnot found" , state : 'error'}});
        }
        if(studId.rows[0].code){
          return res.state(200).json({message : {text : "The student already has a certificate" , state : 'error'}});
        }
       res.status(200).json({message : {text : "Student found" , state : 'success'}, user : studId.rows[0]});
  }catch{
    console.log('not found')
        res.status(200).json({message : "The student didnot found"});
  }
}

export const generateCerty = async (req, res) => {
  const studentId = req.params.id;
  const { date_of_birth, name, email } = req.body;

  try {
 
    const code = generateVerificationId(studentId, date_of_birth, name);
    await db.query("UPDATE enrolled_students SET code = $1 WHERE id = $2", [code, studentId]);


    const doc = new PDFDocument();
    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfData = Buffer.concat(buffers);

    
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASSGMAIL,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL,
        to: email,
        subject: "🎉 Welcome to BraveDude Academy",
        text: `Hello ${name}, your registration is successful! Verification ID: ${code}`,
        attachments: [
          {
            filename: "certificate.pdf",
            content: pdfData,
          },
        ],
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({
        message: { text: "The certificate has been sent to the student", state: "success" },
        verificationId: code,
      });
    });

    
    doc.fontSize(24).text("Certificate of Completion", { align: "center" });
    doc.moveDown();
    doc.fontSize(18).text(`This certifies that ${name}`, { align: "center" });
    doc.moveDown();
    doc.text(`Student ID: ${studentId}`, { align: "center" });
    doc.text(`Date of Birth: ${date_of_birth}`, { align: "center" });
    doc.moveDown(3);
    doc.text("Authorized Signature", { align: "right" });

    doc.end();
  } catch (error) {
    console.error("Error generating certificate:", error);
    res.status(500).json({ error: "Failed to generate certificate" });
  }
};

export const checkCertificate = async (req, res) => {
  const { name, DOB, email, CI } = req.body;
  try{
    const result = await db.query("SELECT * FROM enrolled_students WHERE name = $1 AND date_of_birth = $2 AND email = $3 AND code = $4", [name, DOB, email, CI]);
    
    if(result.rowCount === 0){
      return res.status(200).json({message : {text : "The certificate is not valid" , state : 'error'}});
    }
    
    res.status(200).json({message : {text : "The certificate is valid" , state : 'success'}, data: result.rows[0]});
  }catch{
    console.error("Error checking certificate:", error);
    res.status(500).json({ error: "Failed to check certificate" });
  }
}
