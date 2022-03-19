const express = require('express');
const router = express.Router();
const {getAllExpenses} = require('../controllers/exprenseController');
const {getExpById} = require('../controllers/exprenseController');
const {addExprense} = require('../controllers/exprenseController');
const {removeExprense} = require('../controllers/exprenseController');

router.get('/', getAllExpenses);

router.get('/:id', getExpById);

router.post('/', addExprense);

router.delete('/:id', removeExprense);

module.exports = router