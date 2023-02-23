import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Note from "../models/noteModel.js";
import Ticket from "../models/ticketModel.js";

const getNotes = expressAsyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.findById(req.params.id)

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error("Man etilgan foydalanuchi")
    }

    const notes = await Note.find({ticket: req.params.id});


    return res.status(200).json(notes)
})

const addNotes = expressAsyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.findById(req.params.id)

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error("Man etilgan foydalanuchi")
    }

    const note = await Note.create({
        text: req.body.text,
        ticket: req.params.id,
        isStaff: false,
        user: req.user.id
    });


    return res.status(200).json(note)
})

export {
    getNotes,
    addNotes
}