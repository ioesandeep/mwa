const SecretService = require('./secret.service');

class SecretController {
    constructor() {
        this.service = new SecretService();
    }

    async reveal(req, res) {
        try {
            const secret = await this.service.getSecret();
            res.json({secret});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }
}

module.exports = new SecretController();