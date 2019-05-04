const user = require('./user.controller');

module.exports = {
    getAll: async (req, res) => {
        try {

            let page = parseInt(req.query.page) || 1;
            page = page < 1 ? 1 : page > 20 ? 20 : page;

            const users = await user.getAll(page);

            if (page < 20) {
                res.set('link', `</users/?page=${page + 1}>; rel=next,</users/?page=20>; rel=last`);
            } else if (page === 20) {
                res.set('link', `</users/?page=${page - 1}>; rel=prev,</users/?page=1>; rel=first`);
            } else if (page === 1) {
                res.set('link', `</users/?page=2>; rel=next,</users/?page=20>; rel=last`);
            }

            //disable proxy caching
            res.set('Cache-control', `private, max-age=86400`);

            res.json({users: users});
        } catch (e) {
            res.json({code: e.code || 500, message: e.message});
        }
    }
};
