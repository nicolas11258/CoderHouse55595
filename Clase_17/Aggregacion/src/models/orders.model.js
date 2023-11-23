import mongoose from "mongoose";

const orderCollection = 'orders'
const { Schema, model } = mongoose;
const orderSchema = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date,
})

const orderModel = model(orderCollection, orderSchema);

export default orderModel;