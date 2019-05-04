const express = require('express');
const users = require('../controllers/users');
const router = express.Router();

//our home page
router.get('/', (req, res) => res.send("Hello world!"));

//users list
router.get('/users', users.getAll);

exports.router = router;
