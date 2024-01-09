import mongoose from "mongoose";
import config from "../config/env.config.js";

export let Contacts;

switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.db, {});
    const { default: ContactsMongo } = await import(
      "./mongo/models/contact.model.js"
    );
    Contacts = ContactsMongo;
    break;

  case "MEMORY":
    const { default: ContactsMemory } = await import(
      "./memory/contacts.memory.js"
    );
    Contacts = ContactsMemory;
    break;
}
