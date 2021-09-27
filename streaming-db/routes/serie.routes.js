const express = require("express");
const serieController = require("../controllers/serie.controller.js");

const routes = express.Router();

routes.post("/serie", serieController.create);
routes.get("/serie/:id", serieController.getById);
routes.get("/serie", serieController.getAll);
routes.delete("/serie/:id", serieController.deleteById);
routes.put("/serie/:id", serieController.alterById);

module.exports = routes;