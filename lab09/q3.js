const MongoClient = require("mongodb").MongoClient;
const {promisify} = require('util');
const config = require('./config');

(async () => {
    try {
        const promise = promisify(MongoClient.connect);
        const connection = await promise(config.db.uri, {useNewUrlParser: true});
        const db = connection.db();
        const collection = db.collection(config.collections.zip);
        const result = await collection.aggregate([
            {
                $group: {
                    _id: {city: '$city', state: '$state'},
                    count: {$sum: 1}
                }
            }, {
                $match: {count: {$gt: 1}}
            }, {
                $project: {
                    _id: 0,
                    city: '$_id.city',
                    state: '$_id.state'
                }
            }, {
                $sort: {state: 1, city: 1}
            }
        ]).toArray();
        console.log("The following cities has more than one zip");
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        process.exit(0);
    }
})();