import asyncHandler from "express-async-handler"

/**
* @desc:    Yangi foydalanuvchini ro'yxatdan o'tkazish
* @route:   /api/users/sign-up
* @access:  Ommaviy
**/
const signUp = asyncHandler(async  (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Iltimos barcha maydonni to'ldiring")
    }

    return res.json({name, email, password})
})

/**
 * @desc:    Yangi foydalanuvchini ro'yxatdan o'tkazish
 * @route:   /api/users/sign-in
 * @access:  Ommaviy
 **/
const signIn = asyncHandler(async (req, res) => {
    res.send('Login')
})

export {
    signUp,
    signIn
}