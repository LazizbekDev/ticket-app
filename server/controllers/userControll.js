import asyncHandler from "express-async-handler";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

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
            email: user.email,
            token: generateToken(user._id)
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
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if ( user && (await compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Noto\'g\'ri ma\'lumotlar kiritildi')
    }
})

/**
 * @desc:    Foydalanuchi profileni olish
 * @route:   /api/users/me
 * @access:  Shaxsiy
 **/
const getMe = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
    return res.status(200).send(user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.X_TOKEN, {
        expiresIn: '30d'
    })
}

export {
    signUp,
    signIn,
    getMe
}