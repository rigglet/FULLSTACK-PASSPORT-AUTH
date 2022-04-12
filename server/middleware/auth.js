const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

exports.loginRequired = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, function (err, decodedPayload) {
      if (decodedPayload) {
        return next();
      } else {
        return next({
          status: 401,
          message: "loginRequired: Please log in first",
        });
      }
    });
  } catch (error) {
    return next({ status: 401, message: "loginRequired: Please log in first" });
  }
};

exports.ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, function (err, decodedPayload) {
      if (decodedPayload && decodedPayload.id === req.params.user_id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first",
        });
      }
    });
  } catch (error) {
    return next({
      status: 401,
      message: "Please log in first",
    });
  }
};
