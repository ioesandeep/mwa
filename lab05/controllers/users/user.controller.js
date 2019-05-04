const axios = require('axios');
const config = require('../../config');

class UserController {
    async getAll(page) {
        const response = await axios.get(`${config.usersFetchUrl}?results=10`);
        return response.data.results;
    }
}

module.exports = new UserController();
