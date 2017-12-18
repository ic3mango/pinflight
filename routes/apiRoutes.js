const express = require('express');
const mongoose = require('mongoose');

const Pin = mongoose.model('Pin');
const router = express.Router();

const requireLogin = require('../middlewares/requireLogin');

router.get('/pin/:id', async (req, res, next) => {
  try {
    res.send(await Pin.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post('/pin/:id/edit', async (req, res, next) => {
  try {
    res.json(await Pin.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    ).exec());
  } catch (err) {
    next(err);
  }
});

router.delete('/pin/:id', async (req, res, next) => {
  try {
    await Pin.findById(req.params.id).remove().exec();
  } catch (err) {
    next(err);
  }
  res.send(`pin with id ${id} has been deleted`);
});

router.post('/pin', async (req, res, next) => {
  req.body.author = req.user._id;
  try {
    const pin = await (new Pin(req.body)).save();
  } catch (err) {
    next(err);
  }

  res.json(pin);
});

router.get('/pins', async (req, res) => {
  try {
    res.send(await Pin.find({}));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
