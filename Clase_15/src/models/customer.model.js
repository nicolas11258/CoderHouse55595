import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const customerSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: Number, required: false },
  direccion: { type: String, required: true },
  esVisible: { type: Boolean, default: false },
});

const Customer = model('Customer', customerSchema);

export default Customer;
