const mongoose = require('mongoose');
const Income = require('../models/incomeModel');


async function getAllIncomes(req, res) {
  const income = await Income.find();
  res.send(income);
};

async function getIncById(req, res){
  const income = await Income.findById(req.params.id);
  if (income.length === 0) {
    return res.status(404).send('No such income');
  }
  res.status(200).send(income);
};

async function addIncome(req, res){
  const income = new Income({
    income: req.body.income,
  });
  await income.save();
  res.send(income);
};

async function removeIncome(req, res){
  await Income.findOneAndDelete({ id: req.body.id });
  res.send(`Income has been deleted`);
};

module.exports = {
  getAllIncomes,
  getIncById,
  addIncome,
  removeIncome
};