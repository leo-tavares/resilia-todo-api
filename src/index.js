const express = require("express");
const TodoController = require("./controllers/todo.controller");

const app = express();
app.use(express.json());

app.get("/todo/", TodoController.getAll);

app.get("/todo/:id/", TodoController.getTodo);

app.post("/todo/", TodoController.create);

app.listen("3333", console.log("tudo funfando...."));
