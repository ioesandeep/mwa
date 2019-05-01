Array.prototype.even = function () {
    console.log(this.filter(num => num % 2 === 0));
};

setTimeout(() => {
    [1, 2, 3, 4, 5, 6].even();
});

setImmediate(() => {
    [1, 2, 3, 4, 5, 6].even()
});
