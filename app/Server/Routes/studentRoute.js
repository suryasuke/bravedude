import express from 'express';
const router = express.Router();
import { addstudent } from '../controllers/StudentControl.js';
import { getStudent } from '../controllers/StudentControl.js';
import { generateCerty } from '../controllers/StudentControl.js';
import { checkCertificate } from '../controllers/StudentControl.js';

router.post("/add" , addstudent);
router.post("/get" , getStudent);
router.post("/certificate-generate/:id", generateCerty);
router.post("/check-certificate", checkCertificate)
export default router;