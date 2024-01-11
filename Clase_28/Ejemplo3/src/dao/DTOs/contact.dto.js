export default class ContactDTO {
  constructor(contact) {
    this.name = contact.name;
    this.email = contact.email;
    this.cellphone = contact.cellphone
      ? contact.cellphone.split("-").join("")
      : "";
  }
}
