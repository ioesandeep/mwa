const MongoClient = require("mongodb").MongoClient;
const {promisify} = require('util');
const config = require('./config');

(async () => {
    try {
        const promise = promisify(MongoClient.connect);
        const connection = await promise(config.db.uri, {useNewUrlParser: true});
        const db = connection.db();
        const collection = db.collection(config.collections.zip);
        const zips = await collection.aggregate([
            {
                $match: {
                    state: 'WA'
                }
            }, {
                $group: {
                    _id: '$state',
                    zips: {$addToSet: '$_id'}
                }
            }
        ]).toArray();

        console.log('All the zip codes in washington are:');
        console.log(zips.pop().zips);
    } catch (e) {
        console.log(e);
    } finally {
        process.emit(0);
    }
})();