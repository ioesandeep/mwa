const {db} = require('../../db');
const config = require('../../config');

class PlaceService {
    async addPlace(data) {
        const inst = await db.instance();
        inst.collection(config.collections.locations).insert(data);
    }

    async findPlaces(criteria) {
        return [];
    }
}

module.exports = PlaceService;
