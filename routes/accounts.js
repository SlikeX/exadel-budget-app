const express = require('express');
const router = express.Router();
const {
  allUsers,
  userById,
  userSend
} = require('../controllers/acountController')


const accounts = [
  {id : 1, name: 'SlikeX'}
];

router.get('/', allUsers);

router.get('/:id', userById);

router.post('/', userSend);

module.exports = router