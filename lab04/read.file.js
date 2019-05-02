const fs = require('fs');

process.on('start', file => {
    console.log(file);
    process.send('24525');
});