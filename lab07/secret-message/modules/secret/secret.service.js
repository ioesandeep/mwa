
class SecretService {
    constructor() {
    }

    async getById(id) {
        return this.data.reduce((obj, row) => row.id === id ? row : obj, {});
    }

}

module.exports = SecretService;
