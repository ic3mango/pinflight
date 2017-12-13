const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');

const app = express();

// initialize cookies
app.use(cookieSession({
  maxAge: 24 * 3600 * 1000,
  keys: [keys.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up authenitcation routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send({ 'hello': 'man' });
});

app.get('/greeting', (req, res) => {
  res.end('hi, greetings traveller');
});

module.exports = app;
