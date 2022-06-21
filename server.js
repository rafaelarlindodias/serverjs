// incluido o módulo http
const http = require('http');

// constantes host e porta
const hostname = '127.0.0.1';
const port = 3000;

// método createServer, parâmetros outra função
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type' : 'text/plain'}); // código de status HTTP
  res.write(req.url); // solicitação do cliente. propriedade "url" contém parte da url
  res.end("Servidor em funcionamento"); // escreve a resposta HTTP
});

server.listen(port, hostname, () => {
  console.log(`O servidor está sendo executado em http://${hostname}:${port}/`);
});
