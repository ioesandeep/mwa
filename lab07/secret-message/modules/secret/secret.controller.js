const SecretService = require('./secret.service');

class SecretController {
    constructor() {
        this.service = new SecretService();
    }

    async reveal(req, res) {
        try {
            const id = req.params.id;
            const grade = await this.service.getById(id);
            if (!grade.id) {
                throw new Error("Grade not found.");
            }
            res.json({grade, message: "Grade loaded successfully."});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }
}

module.exports = new SecretController();