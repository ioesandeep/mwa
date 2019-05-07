const express = require('express');
const grades = require('../modules/grades/grades.controller');
const router = express.Router();

//our home page
router.get('/', (req, res) => res.send("Hello world!"));

//users list
router.get('/grades', (req, res) => grades.getAll(req, res));
router.get('/grades/:id', (req, res) => grades.getById(req, res));
router.post('/grades', (req, res) => grades.add(req, res));
router.put('/grades/:id', (req, res) => grades.update(req, res));
router.delete('/grades/:id', (req, res) => grades.remove(req, res));

exports.router = router;
