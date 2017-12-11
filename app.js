const express = require('express');

const app = express();
const authRoutes = require('./routes/authRoutes');

// set up authenitcation routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send({ 'hello': 'world' });
});

app.get('/greeting', (req, res) => {
  res.end('hi, greetings traveller');
});

module.exports = app;
