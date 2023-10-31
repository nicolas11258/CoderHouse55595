import express from 'express';
import {Server} from 'socket.io';

const port = 3000;

const app = express()

const httpServer = app.listen(port, ()=>{
  console.log(`Servidor corriendo en el puerto ${port}`);
})

const sockerServer = new Server(httpServer);
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views` );
app.set('view engine', 'handlebars');
app.use(express.static(`${__dirname}/public`));
app.use('/', vewsRouter);