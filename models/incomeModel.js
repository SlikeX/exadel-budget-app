const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  income:{
    type: Number,
    required:true
  },
  date:{
    type: Date,
    required: true
  }
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;