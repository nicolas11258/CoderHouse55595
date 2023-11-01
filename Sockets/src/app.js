import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './routes/view.router.js';
import { Server } from 'socket.io';

const app = express();
const port = 8080;

app.engine('handlebars', handlebars.engine());

app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/', viewRouter);

const server = app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});

const io = new Server(server);

io.on("connection", function (socket) {
    console.log("Un cliente se ha conectado");
    socket.emit("messages", messages);
  
    socket.on("newMessage", function(data){
        console.log("llega mensaje")
    
        messages.push(data);
        io.emit('messages', messages);
    })
});
