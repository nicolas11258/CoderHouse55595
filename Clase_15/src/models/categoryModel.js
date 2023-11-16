import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  nombre: { type: String, required: true },
});

const Category = model('Category', categorySchema);

export default Category;
