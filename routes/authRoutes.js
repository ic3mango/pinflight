const passport = require('passport');
const router = require('express').Router();

// google authentication
router.get('/google', (req, res) => {
  // handle with passport
  res.send('google authenitcation route');
});

// auth logout
router.get('/logout', (req, res) => {
  res.send('logging out');
});

module.exports = router;