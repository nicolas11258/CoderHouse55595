const fs = require('fs');
const crypto = require('crypto');

class UserManager {
  constructor() {
    // Nombre del archivo donde se guardarán los usuarios
    this.fileName = 'Usuarios.json';
  }

  // Método para crear un usuario
  createUser(user) {
    // Generar un hash de la contraseña
    const hashedPassword = this.hashPassword(user.password);

    // Crear un objeto de usuario con la contraseña hasheada
    const newUser = {
      nombre: user.nombre,
      apellido: user.apellido,
      username: user.username,
      password: hashedPassword,
    };

    // Leer los usuarios actuales del archivo
    const existingUsers = this.readUsersFromFile();

    // Agregar el nuevo usuario al array de usuarios
    existingUsers.push(newUser);

    // Guardar el array actualizado de usuarios en el archivo
    this.writeUsersToFile(existingUsers);
  }

  // Método para generar un hash de la contraseña
  hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  // Método para verificar una contraseña ingresada con la contraseña hasheada
  verifyPassword(enteredPassword, storedPassword) {
    const [salt, hash] = storedPassword.split(':');
    const enteredHash = crypto.pbkdf2Sync(enteredPassword, salt, 10000, 64, 'sha512').toString('hex');
    return hash === enteredHash;
  }

  // Método para leer los usuarios desde el archivo
  readUsersFromFile() {
    try {
      const data = fs.readFileSync(this.fileName, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      // Si el archivo no existe o hay un error, se devuelve un array vacío
      return [];
    }
  }

  // Método para escribir los usuarios en el archivo
  writeUsersToFile(users) {
    fs.writeFileSync(this.fileName, JSON.stringify(users, null, 2));
  }
}

// Ejemplo de uso
const userManager = new UserManager();
userManager.createUser({
  nombre: 'John',
  apellido: 'Doe',
  username: 'johndoe',
  password: 'micontraseña123',
});

// Puedes agregar más usuarios utilizando userManager.createUser()
