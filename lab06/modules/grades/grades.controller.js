const GradeService = require('./grade.service');

class GradesController {
    constructor() {
        this.service = new GradeService();
    }

    async getAll(req, res) {
        try {

            let page = parseInt(req.query.page) || 1;
            page = page < 1 ? 1 : page > 20 ? 20 : page;

            const grades = await this.service.getAll(page);

            if (page < 20) {
                res.set('link', `</api/v1/grades/?page=${page + 1}>; rel=next,</api/v1/grades/?page=20>; rel=last`);
            } else if (page === 20) {
                res.set('link', `</api/v1/grades/?page=${page - 1}>; rel=prev,</api/v1/grades/?page=1>; rel=first`);
            } else if (page === 1) {
                res.set('link', `</api/v1/grades/?page=2>; rel=next,</users/?page=20>; rel=last`);
            }

            //disable proxy caching
            res.set('Cache-control', `private, max-age=86400`);

            res.json({grades, message: "Grades loaded successfully."});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }

    async getById(req, res) {
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

    async add(req, res) {
        try {
            if (!req.body) {
                throw new Error("Request data is empty.");
            }

            const request = {...req.body};
            const grade = await this.service.add(request);
            if (!grade) {
                throw new Error("Grade could not be added.");
            }

            res.json({grade, message: "Grade added successfully."});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }

    async update(req, res) {
        try {
            if (!req.params.id) {
                throw new Error("Grade is not selected.");
            }

            if (!req.body) {
                throw new Error("Request data is empty.");
            }

            const request = {...req.body};

            const grade = await this.service.update({...request, id: req.params.id});
            if (!grade) {
                throw new Error("Grade could not be updated.");
            }

            res.json({grade, message: "Grade updated successfully."});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }

    async remove(req, res) {
        try {
            if (!req.params.id) {
                throw new Error("Grade is not selected.");
            }

            const grade = await this.service.remove(id);
            if (!grade) {
                throw new Error("Grade could not be deleted.");
            }

            res.json({grade, message: "Grade deleted succcessfully."});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }
}

module.exports = new GradesController();