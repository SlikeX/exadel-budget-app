const express = require('express');
const router = express.Router();
const {getAllIncomes} = require('../controllers/imcomeController');
const {getIncById} = require('../controllers/imcomeController');
const {addIncome} = require('../controllers/imcomeController');
const {removeIncome} = require('../controllers/imcomeController');

router.get('/', getAllIncomes);

router.get('/:id', getIncById);

router.post('/', addIncome);

router.delete('/:id', removeIncome);

module.exports = router