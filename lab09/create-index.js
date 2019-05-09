const MongoClient = require("mongodb").MongoClient;
const {promisify} = require('util');
const config = require('./config');

(async () => {
    try {
        const promise = promisify(MongoClient.connect);
        const connection = await promise(config.db.uri, {useNewUrlParser: true});
        const db = connection.db();
        const collection = db.collection(config.collections.zip);
        collection.createIndex({state: 1}, {unique: true});
    } catch (e) {
        console.log(e);
    } finally {
        process.exit(0);
    }
})();