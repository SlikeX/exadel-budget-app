const express = require('express');
const router = express.Router();
const passport = require('passport');
const { adminGuard } = require('../utils/guards');
const {authUser} = require('../controllers/authController');
const {checkAdmin} = require('../controllers/authController');
const {auth} = require('../controllers/authController');

router.post('/login', authUser);

router.get('/users', auth, adminGuard, checkAdmin);

module.exports = router;