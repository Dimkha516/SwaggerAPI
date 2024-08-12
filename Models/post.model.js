const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports.PostsModel = mongoose.model("posts", postSchema);