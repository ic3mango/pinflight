const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const userSchema = new Schema({
  username: String,
  googleId: String,
  avatar: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: `email is not valid`,
      isAsync: false
    }
  },
  creates: [
    { type: Schema.ObjectId, ref: 'Pin' }
  ],
  saves: [
    { type: Schema.ObjectId, ref: 'Pin' }
  ],
  hides: [
    { type: Schema.ObjectId, ref: 'Pin' }
  ]
});

mongoose.model('User', userSchema);
