// Create web server
const http = require('node:http');

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Hello from the web server!\n');
        return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found\n');
});

server.listen(port, () => {
    console.log(`Web server listening on http://localhost:${port}`);
});

module.exports = server;