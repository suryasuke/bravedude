import { google } from "googleapis";
import dotenv from 'dotenv'
import path from 'path'

dotenv.config();
console.log("Client Email:", process.env.GOOGLE_CLIENT_EMAIL);
console.log("Private Key length:", process.env.GOOGLE_PRIVATE_KEY?.length);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "config/credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

console.log("Spreadsheet ID:", SPREADSHEET_ID);

export async function addStudentToSheet(student) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        student.name,
        student.phone,
        student.degree,
        student.email,
        student.course,
        student.location,
        new Date().toLocaleString()
      ]],
    },
  });
  console.log("✅ Added to Google Sheets");
}
