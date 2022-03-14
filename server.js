
const express = require('express');
const cors = require('cors');

const accountsRoute = require('./routes/accounts.js');
const categoriesRoute = require('./routes/categories.js');
const expenseRoute = require('./routes/expense.js');
const incomeRoute = require('./routes/income.js');
const authentication = require('./routes/auth')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(request,response) => {
  response.send('Hello World')
});

app.use('/accounts',accountsRoute);
app.use('/categories',categoriesRoute);
app.use('/expense',expenseRoute);
app.use('/income',incomeRoute);
app.use('/auth', authentication);

app.listen(3000);