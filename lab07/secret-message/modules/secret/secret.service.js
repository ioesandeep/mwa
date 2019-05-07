const {db} = require('../../db');
const config = require('../../config');
const encryption = require('simple-encryptor');

class SecretService {
    async getSecret() {
        const inst = await db.instance();
        const data = await inst
            .collection(config.collections.secret)
            .find({})
            .project({
                key: 1,
                message: 1,
                _id: 0
            })
            .limit(1)
            .toArray();

        if (!data || data.length === 0) {
            return;
        }

        const secret = data.pop();
        const encryptor = encryption(secret.key);
        return encryptor.decrypt(secret.message);
    }
}

module.exports = SecretService;
