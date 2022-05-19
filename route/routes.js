const express = require("express");
const router = express.Router();


const signup = require("../controller/register");
const login = require("../controller/login");
const createTodo = require("../controller/createTodoController");
const getTodo    = require("../controller/getTodoController");
const upateTodo  = require("../controller/updateTodoController");
const deleteTodo = require("../controller/deleteTodoController");

router.post("/api/todo", createTodo);
router.get("/api/todo", getTodo);
router.put("/api/todo/:id", upateTodo);
router.delete("/api/todo/:id", deleteTodo);

router.post("/api/v1/signup", signup)
router.post("/api/v1/login", login)

module.exports = router;