const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expense:{
    type: Number,
    required:true
  },
  date:{
    type: Date,
    required: true
  }
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;