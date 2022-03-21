const mongoose = require('mongoose');
const Expense = require('../models/expenseModel');


async function getAllExpenses(req, res) {
  const expense = await Expense.find();
  res.send(expense);
};

const getExpById = (req, res) => {
  const expense = await Expense.findById(req.params.id);
  if (expense.length === 0) {
    return res.status(404).send('No such expense');
  }
  res.status(200).send(expense);
};

const addExprense = (req, res) =>{
  const expense = new Expense({
    expense: req.body.expense,
  });
  await expense.save();
  res.send(expense);
};

const removeExprense = (req, res) =>{
  await Expense.findOneAndDelete({ id: req.body.id });
  res.send(`Expense has been deleted`);
};

module.exports = {
  getAllExpenses,
  getExpById,
  addExprense,
  removeExprense
}