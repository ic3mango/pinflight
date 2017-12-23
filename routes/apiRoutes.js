const express = require('express');
const mongoose = require('mongoose');

const Pin = mongoose.model('Pin');
const User = mongoose.model('User');
const router = express.Router();

const requireLogin = require('../middlewares/requireLogin');

// get user info
router.get('/users/me', (req, res) => {
  let user = req.user;
  res.send(user ? {
    ...user,
    creates: user.creates.map(c => ({ _id: c })),
    saves: user.saves.map(s => ({ _id: s })),
    hides: user.hides.map(h => ({ _id: h }))
  } : false);
});

// logout
router.get('/logout', requireLogin, (req, res) => {
  req.logout();
  res.redirect('/');
});

// populates user creates, hides, saves fields
router.get('/users/me/populate', requireLogin, async (req, res, next) => {
  try {
    res.send(await User.findById(req.user._id).populate("saves hides creates"));
  } catch (err) {
    next(err);
  }
});

// get data on a single pin by id
router.get('/pins/:id', async (req, res, next) => {
  try {
    res.send(await Pin.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// edit pin
router.post('/pins/:id/edit', requireLogin, async (req, res, next) => {
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

// either save a pin if it is not in saves array or removes it
router.post('/pins/:id/save', requireLogin, async (req, res, next) => {
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

// either hide a pin if it is not in hides array or removes it
router.post('/pins/:id/hide', requireLogin, async (req, res, next) => {
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

// delete a pin by id
router.delete('/pins/:id', requireLogin, async (req, res, next) => {
  try {
    await Pin.findById(req.params.id).remove().exec();
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});

// create a pin, associate pin with user who created it
router.post('/pins', requireLogin, async (req, res, next) => {
  req.body.author = req.user._id;
  try {
    const pin = await (new Pin(req.body)).save();
    const update = {
      $push: {
        creates: pin._id,
      }
    };
    if (req.body.like)
      update["$push"].saves = pin._id;

    await User.findByIdAndUpdate(
      req.body.author,
      update
    );
    res.json(pin);
  } catch (err) {
    next(err);
  }
});

// main query route, get data on all pins
router.get('/pins', async (req, res, next) => {
  try {
    res.send(await Pin.find({}));
  } catch (err) {
    next(err);
  }
});

// get data on all tags
router.get('/pins/tags', async (req, res, next) => {
  try {
    const pins = await Pin.getTagsList();
    res.json(pins);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
