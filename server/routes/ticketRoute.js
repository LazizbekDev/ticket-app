import { Router } from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
    createTicket,
    deleteTicket,
    getTicket,
    getTickets,
    updateTicket
} from "../controllers/ticketControl.js";
import noteRoutes from "./noteRoutes.js";

const router = Router();

router.use('/:id/notes', noteRoutes)

router
    .route('/')
    .get(protect, getTickets)
    .get(protect, getTicket)
    .post(protect, createTicket)

router
    .route('/:id')
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket)

export default router;