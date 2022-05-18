const express = require("express");
const router = express.Router();

const {createTodo, getTodo,  upateTodo, deleteTodo,} = require("../controller/todoController");


router.post("/api/todo", createTodo);
router.get("/api/todo", getTodo);
router.put("/api/todo/:id", upateTodo);
router.delete("/api/todo/:id", deleteTodo);

module.exports = router;