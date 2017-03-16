const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World');
	}).listen(port, hostname, () => {
		console.log (`Server Running at http://${hostname}:${port}`);
	});