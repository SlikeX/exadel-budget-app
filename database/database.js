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

const categories = [
  'transport',
  'health',
  'sport',
  'entertament'
];

function getUserByEmail(email) {
  return users.find((user) => user.email === email);
};

function loginUser(email, password) {
  const user = getUserByEmail(email);
  if (user && bcrypt.compareSync(password, user.password)) return user;
};

module.exports = {
  users,
  categories,
  loginUser,
  getUserByEmail,
};