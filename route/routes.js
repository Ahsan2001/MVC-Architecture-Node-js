const express = require("express");
const router = express.Router();

const createTodo = require("../controller/createTodoController");
const getTodo    = require("../controller/getTodoController");
const upateTodo  = require("../controller/updateTodoController");
const deleteTodo = require("../controller/deleteTodoController");

router.post("/api/todo", createTodo);
router.get("/api/todo", getTodo);
router.put("/api/todo/:id", upateTodo);
router.delete("/api/todo/:id", deleteTodo);

module.exports = router;