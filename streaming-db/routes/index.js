const express = require("express");
const router = express.Router();

router.use(require("./endereco.route.js"));

module.exports = router;