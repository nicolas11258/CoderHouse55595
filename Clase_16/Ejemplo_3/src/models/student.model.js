import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
});

const Student = model('Users', userSchema);

export default Student;
