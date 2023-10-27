import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import usersRouter from './routes/user.router.js';

const port = 8080;
const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', usersRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
