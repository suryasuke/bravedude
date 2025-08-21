import express from 'express';
import { postCollab } from '../controllers/postCollab.js' 

const router = express.Router();

router.post("/submit" , postCollab);
export default router;