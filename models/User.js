const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  googleId: String
});

mongoose.model('User', userSchema);
