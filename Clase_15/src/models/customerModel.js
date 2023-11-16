import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const customerSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  direccion: { type: String, required: true },
});

const Customer = model('Customer', customerSchema);

export default Customer;
