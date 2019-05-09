const express = require('express');
const placeController = require('../modules/place/place.controller');
const router = express.Router();

//our home page
router.get('/', (req, res) => res.send("Hello world!"));

router.post('/places', (req, res) => placeController.addPlace(req, res));

router.get('/search/:category', (req, res) => placeController.search(req, res));


exports.router = router;
