import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  categoria: { type: Schema.Types.ObjectId, ref: 'Category' },
  esVisible: { type: Boolean, default: false },
});

const Product = model('Product', productSchema);

export default Product;
