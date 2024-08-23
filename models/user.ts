// models/user.js
import mongoose from "mongoose";

interface role {}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true, minlength: 8, maxlength: 100 },
  verificationToken: { type: String },
  isVerified: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["admin", "user", "manager"],
    default: "user",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

import { Document } from "mongoose";

export interface IUser extends Document {
  full_name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default User;
