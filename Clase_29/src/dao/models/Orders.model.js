import mongoose from "mongoose";

const collectionName = "order";

const collectionSchema = new mongoose.Schema({
  number: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurant",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  products: [],
  totalPrice: Number,
  status: String,
});

const Orders = mongoose.model(collectionName, collectionSchema);

export default Orders;
