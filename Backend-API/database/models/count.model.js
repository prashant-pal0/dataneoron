import mongoose, { Mongoose, Schema } from "mongoose";



export const trackerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    method: String,
    url: String,
    timestamp: { type: Date, default: Date.now },

})

const ApiTracker = mongoose.models.Tracker || mongoose.model('Tracker', trackerSchema)

export default ApiTracker