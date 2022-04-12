const db = require("../models");
const jwt = require("jsonwebtoken");
//const { inspect } = require("util");

exports.signin = async function (req, res, next) {
  try {
    //find a user
    let user = await db.User.findOne({
      email: req.body.email,
    }).populate({
      path: "profileImageUrl",
      select: { fileName: true },
    });

    let { id, username, profileImageUrl, email } = user;

    //console.log(inspect(user, { depth: null }));

    let isMatch = await user.comparePassword(req.body.password);

    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token,
        email,
      });
    } else {
      return next({
        status: 400,
        message: "Invalid email/password.",
      });
    }
  } catch (error) {
    return next({
      status: 400,
      message: "Invalid email/password.",
    });
  }
};

exports.signup = async function (req, res, next) {
  try {
    //create a user
    let user = await db.User.create(req.body);
    const { id, username } = user;
    //create a token (signing a token)
    //process.env.SECRET_KEY
    let token = jwt.sign({ id, username }, process.env.SECRET_KEY);
    return res.status(200).json({
      id,
      username,
      token,
    });
  } catch (err) {
    //see what kind of error
    //if a specific type of error
    if (err.code === 11000) {
      //respond with email / password already taken
      err.message = "Sorry, that username / password is taken";
    }
    //else send generic 400
    return next({
      status: 400,
      message: err.message,
    });
  }
};
