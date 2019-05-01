const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`<h2>Welcome to node.</h2>`);
}).listen(8080, () => console.log("Listening on port 8080. Type localhost:8080 in your browser."));