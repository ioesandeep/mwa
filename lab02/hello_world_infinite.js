function doNotExit() {
    setTimeout(doNotExit, 0);
}

setTimeout(function () {
    console.log('world');
    //never exit
    doNotExit();
}, 2000);
console.log('hello');
