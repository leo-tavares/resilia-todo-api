const { request, response } = require("express");
const TodoModel = require("../models/todo.models");

const todos = [
  new TodoModel({ description: "mock 1", id: 1 }),
  new TodoModel({ description: "mock 2", id: 2 }),
];

class TodoController {
  /**
   * @param {request} req
   * @param {response} res
   */
  static getTodo(req, res) {
    const { id } = req.params;
    const todo = todos.find((t) => t.getTodo().id == Number(id));
    if (todo) {
      res.send({ todo });
    } else {
      res.status(400).send({ error: "todo não encontrado" });
    }
  }
  /**
   * @param {request} req
   * @param {response} res
   */
  static create(req, res) {
    const todo = req.body;

    todos.push(new TodoModel({ ...todo, id: todos.length + 1 }));

    res.send(todo);
  }
  /**
   * @param {response} res
   */
  static getAll(_, res) {
    res.send(todos);
  }
  /**
   * @param {request} req
   * @param {response} res
   */
  static remove(req, res) {
    const { id } = req.params;

    const todoIdx = todos.findIndex((todo) => todo.getTodo().id === Number(id));
    if (todoIdx < 0) {
      res.status(400).send({ msg: "Todo não encontrado" });
    } else {
      todos.splice(todoIdx, 1);
      res.send({ msg: "Todo removido com sucesso" });
    }
  }
}

module.exports = TodoController;
