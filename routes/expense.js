const express = require('express');
const router = express.Router();
const {getAllExpenses} = require('../controllers/expenseController');
const {getExpById} = require('../controllers/expenseController');
const {addExprense} = require('../controllers/expenseController');
const {removeExprense} = require('../controllers/expenseController');

router.get('/', getAllExpenses);

router.get('/:id', getExpById);

router.post('/', addExprense);

router.delete('/:id', removeExprense);

module.exports = router