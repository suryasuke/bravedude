import express from 'express';
import { getStudents } from '../controllers/EnrollController.js'; // make sure to include .js if using ES modules
import { submitEnroll } from '../controllers/EnrollController.js';
import { SubmitFeed } from '../controllers/feedcontrol.js';

const router = express.Router();

router.get("/students", getStudents);
router.post("/submit" , submitEnroll);

export default router;
