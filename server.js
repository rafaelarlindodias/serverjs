const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type' : 'text/plain'});
  res.write(req.url);
  res.end("Servidor em funcionamento");
});

server.listen(port, hostname, () => {
  console.log(`O servidor está sendo executado em http://${hostname}:${port}/`);
});
