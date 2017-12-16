const express = require('express');
const mongoose = require('mongoose');

const Pin = mongoose.model('Pin');
const router = express.Router();

const requireLogin = require('../middlewares/requireLogin');

router.get('/pin/:id', async (req, res) => {
  res.send(await Pin.findById(req.params.id));
});

router.post('/pin/:id/edit', async (req, res) => {
  res.json(await Pin.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  ).exec());
});

router.delete('/pin/:id', async (req, res) => {
  await Pin.findById(req.params.id).remove().exec();
  res.send(`pin with id ${id} has been deleted`);
});

router.post('/pin', async (req, res) => {
  req.body.author = req.user._id;
  const pin = await (new Pin(req.body)).save();

  res.json(pin);
});

router.get('/pins', async (req, res) => {
  res.send(await Pin.find({}));
});

module.exports = router;
