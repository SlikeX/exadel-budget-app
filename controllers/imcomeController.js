const getAllIncomes = (req, res) =>{
  res.send('Income')
};

const getIncById = (req, res) =>{
  res.send(`Income ID ${req.params.id}`)
};

const addIncome = (req, res) =>{
  res.send('Income post')
};

const removeIncome = (req, res) =>{
  res.send(`Income delete ${req.params.id}`)
};

module.exports = {
  getAllIncomes,
  getIncById,
  addIncome,
  removeIncome
};