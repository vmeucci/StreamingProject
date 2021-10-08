const express = require("express");
const serieController = require("../controllers/serie.controller.js");

const routes = express.Router();

routes.post("/catalogo-series", serieController.create);
routes.get("/catalogo-series/:id", serieController.getById);
routes.get("/catalogo-series", serieController.getAll);
routes.delete("/catalogo-series/:id", serieController.deleteById);
routes.put("/catalogo-series/:id", serieController.alterById);

module.exports = routes;