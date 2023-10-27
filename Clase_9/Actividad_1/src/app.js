import express from 'express';
import handlesbar from 'express-handlebars';
import __dirname from './utils.js';

const port = 8080;
const app = express();

app.engine('handlebars', handlesbar.engine());

app.set('views',`${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

// Array de usuarios
const users = [
  { nombre: 'Usuario 1', apellido: 'Apellido 1', edad: 25, correo: 'user1@example.com', telefono: '123-456-7890' },
  { nombre: 'Usuario 2', apellido: 'Apellido 2', edad: 30, correo: 'user2@example.com', telefono: '987-654-3210' },
  { nombre: 'Usuario 3', apellido: 'Apellido 3', edad: 28, correo: 'user3@example.com', telefono: '555-555-5555' },
  { nombre: 'Usuario 4', apellido: 'Apellido 4', edad: 22, correo: 'user4@example.com', telefono: '111-222-3333' },
  { nombre: 'Usuario 5', apellido: 'Apellido 5', edad: 35, correo: 'user5@example.com', telefono: '444-777-9999' },
];

// Ruta para manejar la solicitud de la página de inicio
app.get('/', (req, res) => {
  // Generar un índice aleatorio para seleccionar un usuario al azar
  const randomIndex = Math.floor(Math.random() * users.length);
  const user = users[randomIndex];

  // Renderizar la plantilla y pasar los datos del usuario
  res.render('index', { user });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});