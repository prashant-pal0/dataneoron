import mongoose, { Mongoose, Schema } from "mongoose";

export const userSchema = new mongoose.Schema({
    // _id: String, // or you might use ObjectId if you prefer
    name: String,
    email: String,
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User