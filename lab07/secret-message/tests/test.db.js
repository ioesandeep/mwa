const {db} = require('../db');
(async () => {
    const inst = await db.instance();
    console.log(await inst.collection('data').find().toArray());
})();

const service = require('../modules/secret/secret.service');
(async () => {
    const db = new service();
    console.log(await db.getSecret());
})();