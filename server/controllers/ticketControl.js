import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Ticket from "../models/ticketModel.js"

/**
 * @desc:    Foydalanuchi chiptalarini olish
 * @route:   GET /api/tickets
 * @access:  Shaxsiy
 **/
const getTickets = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const tickets = await Ticket.find({ user: req.user._id})
    return res.status(200).json(tickets)
})


/**
 * @desc:    Foydalanuchi chiptalasini olish
 * @route:   GET /api/tickets/:id
 * @access:  Shaxsiy
 **/
const getTicket = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
        res.status(404)
        throw new Error('Chipta topilmadi');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Ruxsat etilmagan');
    }

    return res.status(200).json(ticket)
})

/**
 * @desc:    Foydalanuchi chiptalasini o'chirish
 * @route:   DELETE /api/tickets/:id
 * @access:  Shaxsiy
 **/
const deleteTicket = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
        res.status(404)
        throw new Error('Chipta topilmadi');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Ruxsat etilmagan');
    }

    await ticket.remove()

    return res.status(200).json({success: true})
})

/**
 * @desc:    Foydalanuchi chiptalasini yangilash
 * @route:   PUT /api/tickets/:id
 * @access:  Shaxsiy
 **/
const updateTicket = asyncHandler(async (req, res) => {
    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
        res.status(404)
        throw new Error('Chipta topilmadi');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Ruxsat etilmagan');
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    return res.status(200).json(updatedTicket)
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

    const user = await User.findOne(req.user._id)

    if (!user) {
        res.status(401)
        throw new Error('Foydalanuvchi topilmadi!')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: "yangi"
    })

    return res.status(201).send(ticket)
})

export {
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}