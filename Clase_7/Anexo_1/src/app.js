import express from 'express';

const app = express();
const port = 8080;

// 200
// Ruta GET '/success' para demostrar una respuesta exitosa (código 200 OK)
app.get('/success', (req, res) => {
  res.status(200).send('¡Solicitud exitosa!'); // Código 200 OK
});

//300
// Ruta GET '/redirect' para demostrar redirecciones con códigos de estado 301 y 302
app.get('/redirect', (req, res) => {
  // Redirección permanente (301)
  res.status(301).redirect('/destination');

  // Redirección temporal (302)
  // res.status(302).redirect('/destination');
});
  
// Ruta GET '/destination' para redirección
app.get('/destination', (req, res) => {
  res.send('Has llegado a tu destino.');
});

// Ruta GET '/notmodified' para demostrar el código de estado 304 (Not Modified)
app.get('/notmodified', (req, res) => {
  res.status(304).send('No modificado');
});

//400
// Ruta GET '/unauthorized' para demostrar el código de estado 401 (Unauthorized)
app.get('/unauthorized', (req, res) => {
  res.status(401).send('No autorizado');
});

// Ruta GET '/forbidden' para demostrar el código de estado 403 (Forbidden)
app.get('/forbidden', (req, res) => {
  res.status(403).send('Acceso prohibido');
});

// Ruta GET '/notfound' para demostrar una respuesta de recurso no encontrado (código 404 Not Found)
app.get('/notfound', (req, res) => {
  res.status(404).send('Recurso no encontrado'); // Código 404 Not Found
});

// Ruta GET '/methodnotallowed' para demostrar el código de estado 405 (Method Not Allowed)
app.get('/methodnotallowed', (req, res) => {
  res.status(405).send('Método no permitido');
});

//500
// Ruta GET '/error' para demostrar una respuesta de error del servidor (código 500 Internal Server Error)
app.get('/error', (req, res) => {
  res.status(500).send('Error del servidor'); // Código 500 Internal Server Error
});

// Ruta GET '/notimplemented' para demostrar el código de estado 501 (Not Implemented)
app.get('/notimplemented', (req, res) => {
  res.status(501).send('No implementado');
});

// Ruta GET '/badgateway' para demostrar el código de estado 502 (Bad Gateway)
app.get('/badgateway', (req, res) => {
  res.status(502).send('Puerta de enlace incorrecta');
});

// Ruta GET '/serviceunavailable' para demostrar el código de estado 503 (Service Unavailable)
app.get('/serviceunavailable', (req, res) => {
  res.status(503).send('Servicio no disponible');
});

// Ruta GET '/gatewaytimeout' para demostrar el código de estado 504 (Gateway Timeout)
app.get('/gatewaytimeout', (req, res) => {
  res.status(504).send('Tiempo de espera de la puerta de enlace agotado');
});

app.listen(port, () => {
  console.log(`El servidor Express está escuchando en el puerto ${port}`);
});
