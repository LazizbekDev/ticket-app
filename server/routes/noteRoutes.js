import {Router} from "express";
import {protect} from "../middleware/authMiddleware.js";
import {addNotes, getNotes} from "../controllers/noteController.js";

const router = Router({mergeParams: true});

router.route('/')
    .get(protect, getNotes)
    .post(protect, addNotes)

export default router