import express from 'express';
import session from 'express-session';

const app = express();
const port = 8080;

app.use(
  session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let message = 'Bienvenido';

  if (req.session.username) {
    message = `Hola, ${req.session.username}!`;
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenida</title>
    </head>
    <body>
      <h1>${message}</h1>
      <form action="/login" method="post">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Iniciar sesión</button>
      </form>
      <form action="/logout" method="post">
        <button type="submit">Cerrar sesión</button>
      </form>
    </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
