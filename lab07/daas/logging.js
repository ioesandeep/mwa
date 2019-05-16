const morgan = require('morgan');
const fs = require('fs');
const config = require('./config');
const path = require('path');
const file = path.join(__dirname, config.logFileName);
exports.morgan = morgan("combined", {stream: fs.createWriteStream(file, {flags: 'a'})});