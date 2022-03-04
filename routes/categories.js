const express = require('express');
const router = express.Router();


const categories = [
  'transport',
  'health',
  'sport',
  'entertament'
]

router.get('/',(request,response) => {
  response.send(categories)
});

router.get('/:id',(request,response) => {
  console.log(categories.length == 0)
  if(categories.length == 0){
    response.status(404).send('Categorie\'s list is empty')
  }
  const category = JSON.stringify(categories[request.params.id])
  response.send(`Categorie\'s ID is ${request.params.id} ${category}`)
})

router.post('/',(request,response) => {
  const category = request.body
  categories.push(category);
  response.send(category)
})

module.exports = router