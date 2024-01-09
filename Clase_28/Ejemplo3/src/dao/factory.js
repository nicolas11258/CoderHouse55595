import mongoose from "mongoose";
import config from "../config/env.config.js";

export let Contacts;

switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.db, {});

    const db = mongoose.connection;

    db.on(
      "error",
      console.error.bind(console, "Error de conexión a la base de datos:")
    );
    db.once("open", () => {
      console.log("Conectado a la base de datos");
    });
    const { default: ContactsMongo } = await import(
      "./mongodb/contacts.mongodb.js"
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
