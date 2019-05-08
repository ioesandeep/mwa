const express = require('express');
const secret = require('../modules/secret/secret.controller');
const router = express.Router();

//our home page
router.get('/', (req, res) => res.send("Hello world!"));

//users list
router.get('/secret', (req, res) => secret.reveal(req, res));

exports.router = router;
