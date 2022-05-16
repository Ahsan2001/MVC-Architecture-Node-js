const express = require("express");
const signup = require("../controller/register");
const login = require("../controller/login");
const router = express.Router();


router.post("/api/v1/signup", signup)
router.post("/api/v1/login", login)

module.exports = router;