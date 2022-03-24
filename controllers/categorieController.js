const mongoose = require('mongoose');
const Category = require('../models/categoryModel');


async function getAllcategories(req, res){
  const category = await Category.find({});
  res.send(category);
}

async function getCatById(req, res){
  const category = await Category.findById(req.params.id)
  if (category.length === 0) {
    return res.status(404).send('No such category');
  }
  res.status(200).send(category);
};

const addCategory = (req, res) =>{
  const category = new Category({
    category: req.body.category,
  });
  await category.save();
  res.send(category);
}

module.exports = {
  getAllcategories,
  getCatById,
  addCategory
}