const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../handlers/user");

// prefix - /api/users/:id
router
  .route("/")
  .get(getUsers)
  .post(createUser)
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
