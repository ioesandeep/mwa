const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hi there");
}).listen(8080, () => console.log("Go to http://localhost:8080 in your browser."));
