// lib/db/user/user.model.ts
import mongoose, { Schema } from "mongoose";

export const UserSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        pw: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;