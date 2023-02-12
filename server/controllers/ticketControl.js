import asyncHandler from "express-async-handler";

/**
 * @desc:    Foydalanuchi chiptalarini olish
 * @route:   GET /api/tickets
 * @access:  Shaxsiy
 **/
const getTickets = asyncHandler(async (req, res) => {
    return res.status(200).send({message: "I love?"})
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