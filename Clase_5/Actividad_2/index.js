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
  // Método para generar un hash de la contraseña con SHA-512 sin salt
  hashPassword(password) {
    const hash = crypto.createHash('sha512').update(password).digest('hex');
    return hash;
  }
  

  // Método para verificar una contraseña ingresada con la contraseña hasheada
  verifyPassword(enteredPassword, storedPassword) {  
    // Generar un hash de la contraseña ingresada con el mismo "salt"
    const enteredHash = this.hashPassword(enteredPassword);
  
    // Comparar los hashes generados
    return enteredHash === storedPassword;
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

  // Método para validar un usuario
  validateUser(username, password) {
    // Leer los usuarios desde el archivo
    const users = this.readUsersFromFile();

    // Buscar el usuario en el array por nombre de usuario
    const user = users.find((u) => u.username === username);

    if (!user) {
      return 'Error: Usuario no encontrado'; // Usuario no existe
    }

    // Verificar si la contraseña coincide
    if (this.verifyPassword(password, user.password)) {
      return 'Logueado'; // Contraseña correcta
    } else {
      return 'Error: Contraseña incorrecta'; // Contraseña incorrecta
    }
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
