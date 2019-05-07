const {db} = require('../../db');
const config = require('../../config');

class SecretService {
    async getSecret() {
        const data = await db.collection(config.collections.secret).findOne().project({key: 1, message: 1});
        return data;
    }
}
module.exports = SecretService;
