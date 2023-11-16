import express from "express";
import __dirname from "./utils.js";
import database from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const port = 8080;
const app = express();
const httpServer = app.listen(port, ()=>{ console.log(`Servidor Express escuchando en el puerto ${port}`)});

const io = new Server(httpServer)

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use('/', viewRouter);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
