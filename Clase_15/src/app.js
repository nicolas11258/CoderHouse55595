import express from "express";
import __dirname from "./utils.js";
import { db } from './config/database.js';
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import productRoutes from './routes/product.router.js';
import categoryRoutes from './routes/category.router.js';
import customerRoutes from './routes/customer.router.js';
import orderRoutes from './routes/order.router.js';

const port = 8080;
const app = express();
const httpServer = app.listen(port, ()=>{ console.log(`Servidor Express escuchando en el puerto ${port}`)});

const io = new Server(httpServer)

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
