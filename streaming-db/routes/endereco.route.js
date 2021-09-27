const express = require("express");
const enderecoController = require("../controllers/endereco.controller.js");

const routes = express.Router();

routes.post("/endereco", enderecoController.create);
routes.get("/endereco/:id", enderecoController.getById);
routes.get("/endereco", enderecoController.getAll);
routes.delete("/endereco/:id", enderecoController.deleteById);
routes.put("/endereco/:id", enderecoController.alterById);

module.exports = routes;