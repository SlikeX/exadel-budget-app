const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Income')
});

router.get('/:id', (request, response) => {
  response.send(`Income ID ${request.params.id}`)
});

router.post('/', (request, response) => {
  response.send('Income post')
});

router.delete('/:id', (request, response) => {
  response.send(`Income delete ${request.params.id}`)
});

module.exports = router