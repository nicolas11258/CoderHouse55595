import contactsModel from "../mongo/models/contact.model.js";

export default class Contacts {
  constructor() {}

  get = async () => {
    const contacts = await contactsModel.find();
    return contacts;
  };

  createContact = async (contact) => {
    const newContact = new contactsModel(contact);
    await newContact.save();
    return 'Contacto guardado exitosamente';
  };
}
