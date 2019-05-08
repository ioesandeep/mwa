const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '50MB.zip'));
    res.end(file);
});
server.listen(8080, () => console.log('Open http://localhost:8080 in your browser.'));
server.on('listening', () => {
    console.log("Server started");
});
