import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    product: {
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
        enum: [
            'new',
            'open',
            'closed',
            'progress',
            'ready',
            'waiting',
            'complete'
        ],
        default: 'new'
    }
}, {
    timestamps: true
})

export default model('Ticket', ticketSchema);