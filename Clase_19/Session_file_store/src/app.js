import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import FileStore from 'session-file-store';

const FileStoreSession = FileStore(session);
const app = express();
const port = 8080;

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto: ${port}`);
});

// Configuración de middleware para manejar cookies
app.use(cookieParser());

// Configuración de middleware para manejar sesiones usando session-file-store
app.use(session({
    store: new FileStoreSession({ path: './sessions' }), // Almacenar sesiones en la carpeta 'sessions'
    secret: 'CoderSecret', // Clave secreta para firmar las cookies de sesión
    resave: false, // Evitar que se guarde la sesión en cada solicitud
    saveUninitialized: true // Guardar la sesión incluso si no se ha modificado
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
