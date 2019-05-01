const {resolve} = require('dns');
const {promisify} = require('util');
promisify(resolve)('www.mum.edu').then(console.log).catch(console.log);
