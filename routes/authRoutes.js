const passport = require('passport');
const router = require('express').Router();

const requireLogin = require('../middlewares/requireLogin');

// google authentication
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect("/");
  }
);


// auth logout
router.get('/logout', requireLogin, (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
