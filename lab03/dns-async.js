const {resolve} = require('dns');
const {promisify} = require('util');
(async () => {
    try {
        const result = await promisify(resolve)('www.mum.edu');
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
console.log("Async function call");
