const morgan = require('morgan');
const fs = require('fs');
const config = require('./config');

exports.morgan = morgan("combined", {stream: fs.createWriteStream(config.logFileName, {flags: 'a'})});