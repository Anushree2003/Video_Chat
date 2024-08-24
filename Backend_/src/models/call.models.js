import mongoose from "mongoose";

const callSchema = new mongoose.Schema({
    caller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    callee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date
    },
    status: {
        type: String,
        enum: ["ONGOING", "MISSED", "ENDED"],
        default: "ONGOING"
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

export const Call = mongoose.model("Call", callSchema)