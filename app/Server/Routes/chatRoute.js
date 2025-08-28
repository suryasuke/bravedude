import express from 'express';
import { chatSend } from '../controllers/chatController.js'

const router = express.Router();

router.post("/send" , chatSend);

export default router;