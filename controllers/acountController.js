const {users} = require('../database/database');


const allUsers = (req, res) =>{
  response.send(users);
};

const userById = (req, res) =>{
  if(accounts.length == 0){
    res.status(404).send('Account\'s list is empty')
  }
  const account = JSON.stringify(accounts[req.params.id])
  res.send(`Account\'s ID is ${req.params.id} ${account}`)
};

const userSend = (req, res) =>{
  const user = {
    id: userss.length + 1,
    name: request.body.name
  };
  users.push(user);
  response.send(users)
}

module.exports = {
  allUsers,
  userById,
  userSend
}