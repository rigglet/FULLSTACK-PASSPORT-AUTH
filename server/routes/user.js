const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");

const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  signup,
  signin,
} = require("../handlers/user");

// prefix - /api/users/
// router
//   .route("/")
//   .get(getUsers)
//   .post(createUser)
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

router.get(getUsers);
router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/notfound",
    failureMessage: true,
  }),
  signin
);

module.exports = router;
