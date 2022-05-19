const TodoModel = require("../model/todoSchema");

const deleteTodo = (req, res) => {
    const { id } = req.params;
    console.log(id);
    TodoModel.deleteOne({ _id: id }, req.body, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};



module.exports =  deleteTodo;
