import { Router } from "express";
import {getMe, signIn, signUp} from "../controllers/userControll.js";
import {protect} from "../middleware/authMiddleware.js";
const route = Router();

route.post('/sign-up', signUp)
route.post('/sign-in', signIn)
route.get('/me', protect, getMe)

export default route