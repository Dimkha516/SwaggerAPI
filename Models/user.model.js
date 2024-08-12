const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    email: {
      nomComplet: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
        unique: true,
      },
      adress: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports.UsersModel = mongoose.model("users", userModel);
