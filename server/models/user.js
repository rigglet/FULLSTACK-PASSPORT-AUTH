const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const PassportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(PassportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
