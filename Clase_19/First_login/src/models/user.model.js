import mongoose from 'mongoose';

const userCollection = 'users'
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
});

const userModel = model(userCollection, userSchema);

export default userModel;
