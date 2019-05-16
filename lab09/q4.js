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
                    pop: {$sum: '$pop'}
                }
            }, {
                $sort: {pop: 1}
            }, {
                $group: {
                    _id: '$_id.state',
                    city: {$first: '$_id.city'},
                    pop: {$first: '$pop'},
                }
            }, {
                $sort: {_id: 1}
            }, {
                $project: {
                    _id: 0,
                    state: '$_id',
                    city: 1,
                    pop: 1
                }
            }
        ]).toArray();
        console.log("The following are the least populated cities in each state.");
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        process.exit(0);
    }
})();