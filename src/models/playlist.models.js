import mongoose from "mongoose";
import { Schema } from "mongoose";
const playlistSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    video : {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });
const Playlist = mongoose.model("Playlist", playlistSchema);
