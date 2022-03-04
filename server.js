
const express = require('express');
const accountsRoute = require('./routes/accounts.js');
const categoriesRoute = require('./routes/categories.js')

const app = express();
app.use(express.json());

app.get('/',(request,response) => {
  response.send('Hello World')
})

app.use('/accounts',accountsRoute);
app.use('/categories',categoriesRoute)

app.listen(3000);