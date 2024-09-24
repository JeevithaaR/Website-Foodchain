var express = require("express");
var router = express.Router();

var crud = require("../controller/login");
router.post("/add", crud.AddData);
router.post("/login", crud.login);
router.get("/view", crud.ViewData);
module.exports = router;
