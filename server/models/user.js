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

// userSchema.pre("save", async function (req, res, next) {
//   try {
//     if (!this.isModified("password")) {
//       return next();
//     }
//     let hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// userSchema.methods.comparePassword = async function (candidatePassword, next) {
//   try {
//     let isMatch = await bcrypt.compare(candidatePassword, this.password);
//     return isMatch;
//   } catch (err) {
//     return next(err);
//   }
// };
