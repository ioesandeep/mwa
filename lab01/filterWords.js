const rxjs = require("rxjs");
const operators = require("rxjs/operators");

//using ES6
String.prototype.filterWords = function (replace = []) {
    return replace.reduce((str, replace) => str.split(replace).join('***'), this);
};

//using promises
String.prototype.filterWordsPromise = function (replace = []) {
    return new Promise((resolve, reject) => {
        resolve(this.filterWords.apply(this, arguments));
    });
};

//using async
String.prototype.filterWordsAsync = async function (replace = []) {
    return this.filterWords.apply(this, arguments);
};

//using rxjs
String.prototype.filterWordsRxjs = function (replace = []) {
    return rxjs
        .from(replace)
        .pipe(operators.reduce((acc, val) => acc.split(val).join('***'), this));
};

(async () => {
    //ES6 function call
    console.log('This house is nice!'.filterWords(['house', 'nice']));

    //Promise call (lazy evaluation)
    'This is a nice house!'.filterWordsPromise(['house', 'nice']).then(console.log).catch(console.log);

    //should call before promise is fulfilled
    console.log("Thank you");

    //async await call
    console.log(await 'This house is very nice'.filterWordsAsync(['house', 'nice']));

    //subscription call (rxjs)
    'This house is very very nice'.filterWordsRxjs(['house', 'nice']).subscribe(console.log);

    //should call in the end
    console.log("Thank you");
})();
