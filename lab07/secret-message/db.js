const MongoClient = require("mongodb").MongoClient;
const config = require("./config");
const {promisify} = require('util');

class DB {
    async connect() {
        const client = await promisify(MongoClient.connect)(config.db.uri, {useNewUrlParser: true});
        this.client = client.db();
        return this.client;
    }

    async instance() {
        return this.client || await this.connect();
    }
}

exports.db = new DB();
