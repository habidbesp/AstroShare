const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
  title: String,
  url: String,
  media_type: String,
  date: Date,
  copyright: String,
  likes:[
    {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    }
  ],
  comments: [
    {
      author: String,
      text: String
    }
  ]
});

const User = mongoose.model('Image', imageSchema);
module.exports = Image;