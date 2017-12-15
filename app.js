const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// populate req.body with form data
app.use(bodyParser.json());

// initialize cookies
app.use(cookieSession({
  maxAge: 24 * 3600 * 1000,
  keys: [keys.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// test routes
app.get('/', (req, res) => {
  res.send({ 'hello': 'man' });
});

app.get('/greeting', (req, res) => {
  res.end('hi, greetings traveller');
});

module.exports = app;
