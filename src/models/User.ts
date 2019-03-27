import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    created_at: Date
});

mongoose.model("users", userSchema);
