import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderDetailSchema = new Schema({
  producto: { type: Schema.Types.ObjectId, ref: 'Product' },
  cantidad: { type: Number, required: true },
  precio_unitario: { type: Number, required: true },
});

const orderSchema = new Schema({
  cliente: { type: Schema.Types.ObjectId, ref: 'Customer' },
  fecha_pedido: { type: Date, default: Date.now },
  estado: { type: String, enum: ['pendiente', 'enviado', 'entregado'], default: 'pendiente' },
  detalles: [orderDetailSchema],
});

const Order = model('Order', orderSchema);

export default Order;
