const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./User.model");

const reviewSchema = new Schema(
  {
    value: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comments", reviewSchema);
module.exports = Comments;
