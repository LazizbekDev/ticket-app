import { Router } from "express";
import {protect} from "../middleware/authMiddleware.js";
import {createTicket, getTickets} from "../controllers/ticketControl.js";

const router = Router();

router
    .route('/')
    .get(protect, getTickets)
    .post(protect, createTicket)

export default router;