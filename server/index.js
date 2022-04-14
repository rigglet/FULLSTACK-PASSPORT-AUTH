require("dotenv").config();
const db = require("./models");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");

//cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    //origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "UPDATE", "DELETE", "OPTIONS"],
    credentials: process.env.CORS_CREDENTIALS,
  })
);

//morgan - logging
app.use(morgan("dev"));

//authentication and authorization
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user");

//error handler
const errorHandler = require("./handlers/error");
//private routes - secured
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//process.env.CORS_ORIGIN;
//process.env.CORS_METHODS;
//process.env.CORS_CREDENTIALS;

//port
const PORT = process.env.PORT || 8081;

app.set("query parser", "simple");
app.use(bodyParser.json());

//session
const sessionOptions = {
  secret: "notverysecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
app.get("/", (req, res, next) => {
  res.send("Server ok");
});

// app.get("/viewcount", (req, res, next) => {
//   if (req.session.count) {
//     req.session.count += 1;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You have viewed the page ${req.session.count} times.`);
// });

//USERS
//app.use("/api/users/:user_id", loginRequired, ensureCorrectUser, userRoutes);
app.use("/api/users", userRoutes);

//AUTH
//app.use("/api/auth", authRoutes);

//error handling
app.use(function (req, res, next) {
  let err = new Error("Requested route not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`SERVER STARTED on PORT ${PORT}`);
});
