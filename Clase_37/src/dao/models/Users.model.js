import mongoose from "mongoose";

const collectionName = "user";

const collectionSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: {
    type: [
      {
        order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "order",
        },
      },
    ],
    default: [],
  },
});

const Users = mongoose.model(collectionName, collectionSchema);

export default Users;
