const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Mi primer hola mundo desde backend!\n');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});