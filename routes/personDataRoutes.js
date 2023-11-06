const express = require('express');
const {createPersonData, getSinglePersonData, getAllPersonData, updatePersonData, deletePersonData} = require('../controller/personDataController');

const router = express.Router();

// GET all data
router.get('/', getAllPersonData)

// GET single data
router.get('/:id', getSinglePersonData)

// POST new data
router.post('/', createPersonData)

// DELETE new data
router.delete('/:id', deletePersonData)

// UPDATE new data
router.patch('/:id', updatePersonData)

module.exports = router