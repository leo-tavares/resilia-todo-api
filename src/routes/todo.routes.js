const { Router } = require("express");
const TodoController = require("../controllers/todo.controller");

const routes = Router();

routes.get("/todo/", TodoController.getAll);

routes.get("/todo/:id/", TodoController.getTodo);

routes.post("/todo/", TodoController.create);

routes.delete("/todo/:id", TodoController.remove);

module.exports = routes;
