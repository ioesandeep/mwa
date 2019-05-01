const {resolve} = require('dns');
resolve('www.mum.edu', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
});
