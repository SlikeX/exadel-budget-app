const bcrypt = require('bcrypt');

const users = [
  {
    id: 1,
    email: 'test1@mail.ru',
    password: 'test123',
    role: 'user',
  },
  {
    id: 2,
    email: 'test2@mail.ru',
    password: 'test123',
    role: 'user',
  },
  {
    id: 3,
    email: 'test3@mail.ru',
    password: 'test123',
    role: 'admin',
  },
];

module.exports = {
  users,
  loginUser,
  getUserByEmail,
};