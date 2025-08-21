import { SubmitFeed } from '../controllers/feedcontrol.js';
import express from 'express';
const router = express.Router();


router.post("/feedsubmit" , SubmitFeed)

export default router;