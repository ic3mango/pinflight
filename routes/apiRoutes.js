const express = require('express');
const mongoose = require('mongoose');

const Pin = mongoose.model('Pin');
const User = mongoose.model('User');
const router = express.Router();

const requireLogin = require('../middlewares/requireLogin');

router.get('/user/populate', requireLogin, async (req, res, next) => {
  try {
    res.send(await User.findById(req.user._id).populate("saves hides creates"));
  } catch (err) {
    next(err);
  }
});

router.get('/pin/:id', async (req, res, next) => {
  try {
    res.send(await Pin.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post('/pin/:id/edit', requireLogin, async (req, res, next) => {
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

router.post('/pin/:id/save', requireLogin, async (req, res, next) => {
  const saves = req.user.saves.map(obj => obj.toString());
  const operator = saves.includes(req.params.id) ? '$pull': '$addToSet';
  try {
   const user = await User.findByIdAndUpdate(
     req.user._id,
     { [operator]: { saves: req.params.id } },
     { new: true }
   );

   res.send(user && req.params.id);
  } catch (err) {
   next(err);
  }
});

router.post('/pin/:id/hide', requireLogin, async (req, res, next) => {
  const hides = req.user.hides.map(obj => obj.toString());
  const operator = hides.includes(req.params.id) ? '$pull': '$addToSet';
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { [operator]: { hides: req.params.id } },
      { new: true}
    );
    res.send(user && req.params.id);
  } catch (err) {
    next(err);
  }
});

router.delete('/pin/:id', async (req, res, next) => {
  try {
    await Pin.findById(req.params.id).remove().exec();
    res.send(`pin with id ${id} has been deleted`);
  } catch (err) {
    next(err);
  }

});

router.post('/pin', requireLogin, async (req, res, next) => {
  req.body.author = req.user._id;
  try {
    const pin = await (new Pin(req.body)).save();
    User.findByIdAndUpdate(
      req.body.author,
      { $addToSet: { creates: pin._id } }
    );
    res.json(pin);
  } catch (err) {
    next(err);
  }
});

router.get('/pins', async (req, res, next) => {
  try {
    res.send(await Pin.find({}));
  } catch (err) {
    next(err);
  }
});

router.get('/pins/tags', async (req, res, next) => {
  try {
    const pins = await Pin.getTagsList();
    res.json(pins);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
