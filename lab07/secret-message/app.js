const express = require("express");
const http = require("http");
const cors = require("cors");

const logger = require("./logging");
const routes = require('./routes');

//initialize express
const app = express();

//allow the app to be run behind a proxy
app.set("trust proxy", true);

//enable etag caching
app.set("etag", true);

//hide the framework
app.set('x-powered-by', false);

//set current environment
app.set("env", process.env.ENV || 'development');

//set current port
app.set("port", process.env.PORT || 8080);

//add body parser
app.use(express.json());

app.use(cors());

app.use(logger.morgan);

//initialize router
app.use('/api/v1', routes.router);

//create our server
const server = http.createServer(app);

//start our server
server.listen(app.get('port'));

server.on("listening", () => console.log("Open http://localhost:8080 in your browser."));

//error handling
server.on("error", (err) => {
    if (err.code === 'EACCESS') {
        console.log("Process requires elevated access.");
    }

    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${app.get('port')} is already in use`);
    }

    process.exit(1);
});
