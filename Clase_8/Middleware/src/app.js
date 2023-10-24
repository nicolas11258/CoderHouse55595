import express from 'express';

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
  });


app.post('/users', authMiddleware, (req, res) => {
  res.status(200).json({
    user: req.body.user,
  });
});

function authMiddleware(req, res, next) {
  if (!req.body.auth) {
    res.status(401).send('No autorizado');
    return;
  }
  next();
}