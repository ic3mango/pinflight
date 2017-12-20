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

pinSchema.pre('remove', function(next) {
  this.model('User').update(
    { $or: [
        { creates: this._id },
        { saves: this._id },
        { hides: this._id }
      ]
    },
    { $pull: { creates: this._id },
      $pull: { saves: this._id },
      $pull: { hides: this._id }
    },
    { multi: true },
  next);
})

mongoose.model('Pin', pinSchema);
