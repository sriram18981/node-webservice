const http = require('http');
const redis_client = require('./redis-client');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('Hello World');
}).listen(8081);

console.log('Server is running at : http://127.0.0.1:8081');
