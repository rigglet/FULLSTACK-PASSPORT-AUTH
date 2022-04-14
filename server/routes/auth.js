const express = require("express");
const router = express.Router({ mergeParams: true });
const { signup, signin } = require("../handlers/auth");

// api/auth
router.post("signup", signup).post("signin", signin);

module.exports = router;
