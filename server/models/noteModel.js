import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    ticket: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Ticket"
    },
    text: {
        type: String,
        required: [true, 'Nimadir yozing']
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    staffId: {
        type: String
    }
}, {
    timestamps: true
})

export default model('Notes', noteSchema);