import contactsModel from "../mongo/models/contact.model.js";

export default class Contacts {
  constructor() {}

  get = async () => {
    const contacts = await contactsModel.find();
    return contacts;
  };
}
