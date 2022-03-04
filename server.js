
const express = require('express');
const accountsRoute = require('./routes/accounts.js');
const categoriesRoute = require('./routes/categories.js');
const expenseRoute = require('./routes/expense.js')
const incomeRoute = require('./routes/expense.js')

const app = express();
app.use(express.json());

app.get('/',(request,response) => {
  response.send('Hello World')
})

app.use('/accounts',accountsRoute);
app.use('/categories',categoriesRoute);
app.use('/expense',expenseRoute);
app.use('/income',incomeRoute);


app.listen(3000);