const express = require('express');
const placeController = require('../modules/place/place.controller');
const router = express.Router();

//our home page
router.get('/', (req, res) => res.send("Hello world!"));


exports.router = router;
