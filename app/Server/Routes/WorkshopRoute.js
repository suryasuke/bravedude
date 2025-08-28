import express from 'express';
import { workshopRegister } from '../controllers/workshopControllers.js';
const router = express.Router();


router.post("/register", workshopRegister)
export default router;