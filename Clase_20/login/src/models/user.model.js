import mongoose from 'mongoose';

const userCollection = 'users'
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = model(userCollection, userSchema);

export default userModel;
