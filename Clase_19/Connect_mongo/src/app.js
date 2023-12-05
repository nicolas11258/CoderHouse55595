import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from 'connect-mongo';

const app = express();
const port = 8080;

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: ${port}`);
});

// Configuración de middleware para manejar cookies
app.use(cookieParser());

// Configuración de middleware para manejar sesiones usando connect-mongo
app.use(session({
    secret: 'CoderSecret', // Clave secreta para firmar las cookies de sesión
    resave: false, // Evitar que se guarde la sesión en cada solicitud
    saveUninitialized: true, // Guardar la sesión incluso si no se ha modificado
    store: MongoStore.create({
        mongoUrl:"mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_18?retryWrites=true&w=majority",

        ttl: 2 * 60, // Tiempo de vida de la sesión en segundos (2 minutos en este caso)
    }),
}));

// Ruta principal
app.get('/', (req, res) => {
    // Obtener el nombre almacenado en la sesión (o usar 'Invitado' si no está presente)
    const name = req.session.name || 'Invitado';

    // Incrementar la cuenta de visitas en la sesión (o comenzar en 1 si es la primera visita)
    req.session.visits = (req.session.visits || 0) + 1;

    // Enviar una respuesta al cliente
    res.send(`Bienvenido, ${name}! Has visitado esta página ${req.session.visits} veces.`);
});

// Ruta para establecer el nombre en la sesión
app.get('/setname/:name', (req, res) => {
    // Establecer el nombre en la sesión
    req.session.name = req.params.name;

    // Enviar una respuesta al cliente
    res.send(`Nombre establecido como: ${req.params.name}`);
});
