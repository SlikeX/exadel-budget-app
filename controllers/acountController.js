const User = require('../models/userModels');


async function allUsers (req, res){
  const users = await User.find({});
  if(users.length === 0){
    return res.status(400).send()
  }
  return res.status(200).send(users)
};

async function userById (req, res){
  const _id = req.params.id;

 try{
  const user = await User.findById(_id);

  if(!user){
    return res.status(404).send();
  }
  res.send(user)
 }catch(error){
  res.status(500).send();
 }
};

async function userSend (req, res){
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token});
  }catch(error){
    res.status(400).send();
  }
}

module.exports = {
  allUsers,
  userById,
  userSend
}