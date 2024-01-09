export default class Contacts {
  constructor() {
    this.memoryData = [];
  }

  get = () => {
    return this.memoryData;
  };

  post = (contact) => {
    memoryData.push(contact);
    result = 'Guardado contacto';
    return result;
  };

  put = (contactId, updatedContact) => {
    const index = memoryData.findIndex(contact => contact.id === contactId);
    if (index !== -1) {
      memoryData[index] = { ...memoryData[index], ...updatedContact };
    }
    result = 'Editar contacto con identificador: ' + contactId;
    return result;
  };

  delete = (contactId) => {
    memoryData = memoryData.filter((contact) => contact.id !== contactId);
    result = 'Eliminado contacto con identificador: ' + contactId
    return result ;
  };
}
