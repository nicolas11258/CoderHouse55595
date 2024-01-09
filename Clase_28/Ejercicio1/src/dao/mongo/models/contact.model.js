import mongoose from 'mongoose';

const contactsCollection = 'contacts'
const { Schema, model } = mongoose;

const contactsSchema = new Schema({
  name: String,
  email: String,
  celphone: String,
});

const contactsModel = model(contactsCollection, contactsSchema);

export default contactsModel;
