const {Observable} = require('rxjs');
const os = require('os');

const checkSystem = (obs$) => {
    const memory = os.totalmem();
    const cores = os.cpus().length;
    const reqMemory = 4 * 1024 * 1024 * 1024;
    const reqCores = 2;

    obs$.next("Checking your system...");

    if (memory < reqMemory) {
        obs$.error("This app needs at least 4 GB of RAM.");
    }

    if (cores < reqCores) {
        obs$.error("Processor is not supported.");
    }

    if (cores >= reqCores && memory >= reqMemory) {
        obs$.complete();
    }
};

class MySubscriber {
    next(data) {
        console.log(data)
    }

    error(data) {
        console.log(data);
    }

    complete(data) {
        console.log("System is checked successfully.");
    }
}

new Observable(checkSystem).subscribe(new MySubscriber());

