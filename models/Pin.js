const mongoose = require('mongoose');
const { Schema } = mongoose;

const pinSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'name of pin cannot be empty'
  },
  description: String,
  imgUrl: {
    type: String,
    trim: true,
    required: true
  },
  tags: [String],
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

mongoose.model('Pin', pinSchema);
