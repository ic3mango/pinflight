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

// serve up react application during production
if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets
  app.use(express.static('client/build'));

  // express will serve up index.html file if it does not recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
