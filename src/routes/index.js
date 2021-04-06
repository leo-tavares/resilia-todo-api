const { Router } = require("express");
const todo = require("./todo.routes");

const routes = Router();

routes.use(todo);

module.exports = routes;
