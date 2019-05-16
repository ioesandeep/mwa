const MongoClient = require("mongodb").MongoClient;
const {promisify} = require('util');
const fs = require('fs');
const config = require('./config');

(async () => {
    try {
        const promise = promisify(MongoClient.connect);
        const connection = await promise(config.db.uri, {useNewUrlParser: true});
        const db = connection.db();
        const collection = db.collection(config.collections.zip);
        const data = fs.readFileSync('./zips.json', 'utf8');
        const json = JSON.parse(data);
        collection.insertMany(json);
    } catch (e) {
        console.log(e);
    } finally {
        process.exit(0);
    }
})();