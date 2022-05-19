const TodoModel = require("../model/todoSchema");

const upateTodo = (req, res) => {
    // const {id} = req.params;
    // const body = req.body;
    //   console.log(id);
    //   console.log(body);
    //   TodoModel.updateOne({ _id: id }, req.body, (err, data) => {
    //     if (err) {
    //       res.send("error", err);
    //     } else {
    //       res.send(data);
    //     }
    //   });
    TodoModel.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};


module.exports =  upateTodo;
