const express = require("express");
const categoriaController = require("../controllers/categoria.controller.js");

const routes = express.Router();

routes.post("/categoria", categoriaController.create);
routes.get("/categoria/:id", categoriaController.getById);
routes.get("/categoria", categoriaController.getAll);
routes.delete("/categoria/:id", categoriaController.deleteById);
routes.put("/categoria/:id", categoriaController.alterById);

module.exports = routes;