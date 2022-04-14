const express = require("express");
const router = express.Router({ mergeParams: true });

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

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
