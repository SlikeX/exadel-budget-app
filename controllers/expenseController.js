const getAllExpenses = (req, res) =>{
  res.send('Expense')
};

const getExpById = (req, res) => {
  res.send(`Expense ID ${req.params.id}`)
};

const addExprense = (req, res) =>{
  res.send('Expense post')
};

const removeExprense = (req, res) =>{
  res.send(`delete Expense ${req.params.id}`)
};

module.exports = {
  getAllExpenses,
  getExpById,
  addExprense,
  removeExprense
}