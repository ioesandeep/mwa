const express = require("express");
const http = require("http");
const routes = require('./routes');

//initialize express
const app = express();

//allow the app to be run behind a proxy
app.set("trust proxy", true);

//enable etag caching
app.set("etag", true);

//hide the framework
app.set('x-powered-by', false);

//enable case sensitive routing
app.set("case sensitive routing", true);

//enable strict routes
app.set("strict routing", true);

//set current environment
app.set("env", process.env.ENV || 'development');

//set current port
app.set("port", process.env.PORT || 8080);

//initialize router
app.use('/', routes.router);

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
