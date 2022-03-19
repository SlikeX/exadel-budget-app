const {categories} = require('../database/database');

const getAllcategories = (req, res) => {
  res.send(categories);
}

const getCatById = (req, res) =>{
  if(categories.length == 0){
    res.status(404).send('Categorie\'s list is empty')
  }
  const category = JSON.stringify(categories[req.params.id])
  res.send(`Categorie ${req.params.id} is ${category}`)
};

const addCategory = (req, res) =>{
  const category = req.body
  categories.push(category);
  res.send(category)
}

module.exports = {
  getAllcategories,
  getCatById,
  addCategory
}