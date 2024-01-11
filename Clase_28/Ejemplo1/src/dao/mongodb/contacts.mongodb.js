import contactsModel from "../mongo/models/contact.model.js";

export default class Contacts {
  constructor() {}

  get = async () => {
    const contacts = await contactsModel.find();
    return contacts;
  };

  post = async (contact) => {
    const newContact = new contactsModel(contact);
    await newContact.save();
    result = 'Guardado contacto';
    return result;
  };

  put = async (contactId, updatedContact) => {
    await contactsModel.findByIdAndUpdate(contactId, updatedContact);
    result = 'Editar contacto con identificador: ' + contactId;
    return result;
  };

  delete = async (contactId) => {
    await contactsModel.findByIdAndDelete(contactId);
    result = 'Eliminado contacto con identificador: ' + contactId
    return result ;
  };
}
