import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Ticket from "../models/ticketModel.js"

/**
 * @desc:    Foydalanuchi chiptalarini olish
 * @route:   GET /api/tickets
 * @access:  Shaxsiy
 **/
const getTickets = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const tickets = await Ticket.find({ user: req.user.id})
    return res.status(200).json(tickets)
})

/**
 * @desc:    Foydalanuchi chiptalarini olish
 * @route:   POST /api/tickets
 * @access:  Shaxsiy
 **/
const createTicket = asyncHandler(async (req, res) => {
    const { product, description } = req.body;

    if (!product || !description) {
        res.status(400)
        throw new Error('Mahsulot va tavsifni kiriting!')
    }

    const user = await User.findOne(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: "new"
    })

    return res.status(201).send(ticket)
})

export {
    getTickets,
    createTicket
}