const express = require("express");
const categoriaController = require("../controllers/categoria.controller.js");

const routes = express.Router();

routes.post("/categoria", categoriaController.create);

module.exports = routes;