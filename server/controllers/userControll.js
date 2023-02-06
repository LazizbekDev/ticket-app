import asyncHandler from "express-async-handler"
import { genSalt, hash } from "bcrypt";
import User from "../models/userModel.js"

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

    const existsUser = await User.findOne({email});

    if (existsUser) {
        res.status(400);
        throw new Error('Bu email foydalanilmoqda. Foydalanuvchi mavjud!')
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('noto\'g\'ri foydalanuvchi ma\'lumotlari kiritildi')
    }
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