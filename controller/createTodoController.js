const TodoModel = require("../model/todoSchema");

const createTodo = (req, res) => {
    const { username, subject, todo } = req.body;
    if (!username || !subject || !todo) {
        return res.json({ message: "Required field are missing" });
    }
    TodoModel.create(req.body, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};





module.exports =  createTodo ;