import mongoose from "mongoose"

const msgSchema = new mongoose.Schema({
    textContent: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    timeSent: {
        type: Date,
        default: Date.now
    },
    msgStatus: {
        type: String,
        enum: ["SENT", "DELIVERED", "READ"],
        default: "SENT"
    }
}, { timestamps: true })

export const Msg = mongoose.model("Msg", msgSchema)