import { Router } from "express";
import {signIn, signUp} from "../controllers/userControll.js";
const route = Router();

route.post('/sign-up', signUp)

route.post('/sign-in', signIn)

export default route