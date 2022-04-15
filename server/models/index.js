const mongoose = require("mongoose");

// use debug in console
mongoose.set("debug", true);

//select Promise API to handle Promises
mongoose.Promise = Promise;

//create DB connection
mongoose.connect(
  process.env.DB,
  {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err);
  }
);

module.exports.User = require("./user");
module.exports.Project = require("./project");
