const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error(`Age can't be less then 18`);
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Your email is not approve`);
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
