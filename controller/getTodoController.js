const TodoModel = require("../model/todoSchema");

const getTodo = (req, res) => {
    TodoModel.find({}, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};


module.exports =  getTodo;
