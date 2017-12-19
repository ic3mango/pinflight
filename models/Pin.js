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

pinSchema.statics.getTagsList = function() {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { "count": -1 } },
  ])
}

mongoose.model('Pin', pinSchema);
