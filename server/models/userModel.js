import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Ismingizni kirting']
    },
    email: {
        type: String,
        required: [true, 'Emailingizni kirting'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Parol kirting']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

export default model('User', userSchema);