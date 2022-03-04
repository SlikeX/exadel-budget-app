const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Expense')
});

router.get('/:id', (request, response) => {
  response.send(`Expense ID ${request.params.id}`)
});

router.post('/', (request, response) => {
  response.send('Expense')
})
router.delete('/:id', (request, response) => {
  response.send(`пше Expense ${request.params.id}`)
})

module.exports = router