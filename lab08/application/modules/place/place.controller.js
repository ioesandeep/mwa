const PlaceService = require('./place.service');

class PlaceController {
    constructor() {
        this.service = new PlaceService();
    }

    async addPlace(req, res) {
        try {
            const data = req.body;
            if (!data) {
                throw {message: "Data expected with this request.", code: 400}
            }
            if (!data.name) {
                throw {message: "Name is required.", code: 400}
            }
            if (!data.category) {
                throw {message: "Category is required.", code: 400}
            }
            if (!data.location || data.location.length !== 2) {
                throw {message: "Location is invalid.", code: 400}
            }

            await this.service.addPlace(data);
            res.json({status: 200, message: "Place added successfully"});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }

    async search(req, res) {
        try {
            const category = req.params.category;
            const name = req.query.name || '';
            const latlng = [41.017654, -91.9665342];
            const places = await this.service.findPlaces({category, name, latlng});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }

}

module.exports = new PlaceController();
