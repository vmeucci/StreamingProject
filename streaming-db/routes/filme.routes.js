const express = require("express");
const filmeController = require("../controllers/filme.controller.js");

const routes = express.Router();

routes.post("/filme", filmeController.create);
routes.get("/filme/:id", filmeController.getById);
routes.get("/filme", filmeController.getAll);
routes.delete("/filme/:id", filmeController.deleteById);
routes.put("/filme/:id", filmeController.alterById);

module.exports = routes;