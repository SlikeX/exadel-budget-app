const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../database');
const { jwtCallback } = require('../passport');
const { adminGuard } = require('../guards');

const router = express.Router();

router.use(passport.initialize());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(opts, jwtCallback));

const auth = passport.authenticate('jwt', { session: false });

router.post('/login', (req, res) => {
  const user = db.loginUser(req.body.email, req.body.password);

  if (user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      id: user.id,
      email: user.email,
      role: user.role,
      token: `Bearer ${token}`,
    });
  } else {
    res.status(401).json({ message: 'Bad request' });
  }
});

router.get('/users', auth, adminGuard, (req, res) => {
  res.json(db.users);
});

module.exports = router;