const express = require('express');
const {createPersonData} = require('../models/personDataModel');

const router = express.Router();

// GET all data
router.get('/', (req, res) => {
    res.json({mssg: 'GET all data'});
})

// GET single data
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single data'});
})

// POST new data
router.post('/', createPersonData)

// DELTE new data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE data'});
})

// DELTE new data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE data'});
})

module.exports = router