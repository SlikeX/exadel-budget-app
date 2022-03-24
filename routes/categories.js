const express = require('express');
const router = express.Router();
const addCategory = require('../controllers/categorieController');
const getCatById = require('../controllers/categorieController');
const addCategory = require('../controllers/categorieController');

router.get('/', getAllcategories);

router.get('/:id', getCatById);

router.post('/', addCategory);

module.exports = router