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
                    pop: {$lt: 5000}
                }
            }, {
                $project: {
                    _id: 0,
                    zip: '$_id',
                    pop: 1,
                    city: 1,
                    state: 1
                }
            }, {
                $sort: {zip: 1}
            }
        ]).toArray();
        console.log("Zips with population less than 5000.");
        console.log(zips);
    } catch (e) {
        console.log(e);
    } finally {
        process.emit(0);
    }
})();