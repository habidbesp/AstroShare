const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
  title: String,
  url: String,
  media_type: String,
  date: Date,
  copyright: String,
  explanation: String,

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

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;