const mongoose = require('mongoose');
const { Schema } = mongoose;

const pinSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'name of pin cannot be empty'
  },
  description: String,
  imgUrl: {
    type: String,
    trim: true
  },
  tags: [String]
}, {
  timestamps: true
});

mongoose.model('Pin', pinSchema);
