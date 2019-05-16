const http = require('http');
const {Subject, fromEvent} = require('rxjs');
const url = require('url');
const {fork} = require('child_process');

subject = new Subject();
subject.subscribe(doParseFile);

http
    .createServer((req, res) => {
        //subject.next({req, res})
        res.writeHead(200, 'text/plain');
        res.end("PID: " + process.pid);
    })
    .listen(4040)
    .on('listening', () => console.log("Open http://localhost:4040/ in your browser."));

function doParseFile({req, res}) {
    const query = url.parse(req.url, true).query;
    //replace with observable
    if (query == null || !query.url) {
        res.end("File url is empty.");
        return;
    }

    const childProcess = fork('./read.file', null, {silent: true});
    childProcess.send(query.url);

    const subscriber = new FileReadSubscriber(res);
    fromEvent(childProcess.stdout, 'data')
    // .pipe(
    //     tap((data) => {
    //         console.log('Data')
    //         console.log(data.toString());
    //     })
    // )
        .subscribe(subscriber);
    fromEvent(childProcess.stdout, 'end').subscribe(subscriber);
}

class FileReadSubscriber {
    constructor(res) {
        this.res = res;
    }

    next(data) {
        if (typeof data === typeof undefined) {
            this.res.end();
            return;
        }

        this.res.write(data);
    }

    error(err) {
        console.log(err);
        this.res.end();
    }

    complete() {
        this.res.end();
    }
}
