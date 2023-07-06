// lib/db/user/user.model.ts
import mongoose, { Schema } from "mongoose";

export const BoardSchema = new Schema(
    {
        index: {
            type: Number,
        },
        title: {
            type: String,
            required: true,
        },
        contents1: {
            type: String,
            required: true,
        },
        contents2: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const Board = mongoose.models.Board || mongoose.model("Board", BoardSchema);

export default Board;