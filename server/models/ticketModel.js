import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    products: {
        type: String,
        required: [true, 'Iltimos mahsulotni tanlang'],
        enum: ['IT', 'movies', 'games', 'fast food']
    },
    description: {
        type: String,
        required: [true, 'Masalaning tavsifini kiriting']
    },
    status: {
        type: String,
        required: true,
        enum: ['yangi', 'davom etmoqda', 'yopilgan'],
        default: 'yangi'
    }
}, {
    timestamps: true
})

export default model('Ticket', ticketSchema);