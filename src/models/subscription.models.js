import { Schema } from "mongoose";
import mongoose from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true, 
    },
    channel : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    }
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);