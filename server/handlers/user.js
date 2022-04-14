const db = require("../models");
const User = require("../models/user");

exports.createUser = async function (req, res, next) {
  try {
    res.send("Creating user");
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async function (req, res, next) {
  try {
    //console.log(req.params);
    //const user = await db.User.findById(req.params.user_id);
    //return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.getUsers = async function (req, res, next) {
  try {
    //console.log(req.params);
    //const user = await db.User.findById(req.params.user_id);
    //return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.getUser = async function (req, res, next) {
  try {
    //console.log(req.params);
    const user = await db.User.findById(req.params.user_id);
    //return 200 ok
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
};

exports.signin = async function (req, res, next) {
  try {
    res.send(`Signin`);
  } catch (error) {
    return next(err);
  }
};

exports.signup = async function (req, res, next) {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    console.log(`Registered user: ${registeredUser}`);

    return res.status(200).json({
      username,
      email,
      password,
    });
    //res.send(`Signup`);
  } catch (err) {
    return next(err);
  }
};
