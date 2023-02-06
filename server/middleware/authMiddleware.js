import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.X_TOKEN);

            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error('ruxsat berilmadi!')
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('ruxsat berilmadi!')
    }
})

export {
    protect
}