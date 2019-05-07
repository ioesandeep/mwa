const fs = require('fs');

class GradeService {
    constructor() {
        this.data = JSON.parse(fs.readFileSync(__dirname + '/collection.json', 'utf8'));
    }

    async getAll() {
        return this.data;
    }

    async getById(id) {
        return this.data.reduce((obj, row) => row.id === id ? row : obj, {});
    }

    async add(data) {
        if ('id' in data) {
            delete data.id;
        }

        const id = this.data.length + 1;
        this.data.push({...data, id: id});
        return this.data.getById(id);
    }

    async update(data) {
        this.data = this.data.map(row => row.id === data.id ? data : row);
        return this.getById(data.id);
    }

    async remove(id) {
        const grade = this.getById(id);
        this.data = this.data.filter(row => row.id !== id);
        return grade;
    }
}

module.exports = GradeService;
