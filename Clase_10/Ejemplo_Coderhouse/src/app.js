import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.router.js";
import {Server} from "socket.io";

const port = 8080;
const app = express();
const httpServer = app.listen(port, ()=>{ console.log(`Servidor Express escuchando en el puerto ${port}`)});

const io = new Server(httpServer)

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use('/', viewRouter);

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
  
    socket.on('message', (message) => {
        console.log('Mensaje recibido:', message);
    });
});
  