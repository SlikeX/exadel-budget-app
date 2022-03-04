const express = require('express');
const router = express.Router();


const accounts = [
  {id : 1, name: 'SlikeX'}
]

router.get('/',(request,response) => {
  response.send(accounts)
})

router.get('/:id',(request,response) => {
  console.log(accounts.length == 0)
  if(accounts.length == 0){
    response.status(404).send('Account\'s list is empty')
  }
  const account = JSON.stringify(accounts[request.params.id])
  response.send(`Account\'s ID is ${request.params.id} ${account}`)
})

router.post('/',(request,response) => {
  console.log(request.body)
  console.log(request.originalUrl)
  const account = {
    id: accounts.length + 1,
    name: request.body.name
  };
  accounts.push(account);
  response.send(account)
})

module.exports = router