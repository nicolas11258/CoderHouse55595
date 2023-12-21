import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const userColletion = 'User';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const user = model(userColletion, userSchema);

export default user;