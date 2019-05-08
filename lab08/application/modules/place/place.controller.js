const PlaceService = require('./place.service');

class PlaceController {
    constructor() {
        this.service = new PlaceService();
    }

    async reveal(req, res) {
        try {
            const secret = await this.service.getSecret();
            res.send(secret);
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }
}

module.exports = new PlaceController();