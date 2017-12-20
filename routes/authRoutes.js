const passport = require('passport');
const router = require('express').Router();

const requireLogin = require('../middlewares/requireLogin');

// google authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// google authenntication callback route
router.get('/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);


module.exports = router;
