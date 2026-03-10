import express from 'express';
import { getStudents } from '../controllers/EnrollController.js';
import { submitEnroll } from '../controllers/EnrollController.js';
import { SubmitFeed } from '../controllers/feedcontrol.js';

const router = express.Router();

router.get("/students", getStudents);
router.post("/submit" , submitEnroll);

export default router;
