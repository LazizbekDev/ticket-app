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
    return res.status(200).send({message: "I love? POST REQUEST"})
})

export {
    getTickets,
    createTicket
}