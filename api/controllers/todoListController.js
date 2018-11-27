'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');


//Sendings all mongodb data
exports.list_all_tasks = function (req, res) {
  console.log("sending all tasks" + req)

  Task.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

//Add new user to mongodb
exports.create_a_task = function (req, res) {
  var new_task = new Task(req.body);
  console.log("reqbody" + JSON.stringify(req.body) + new_task)
  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
// Remove user from mongodb by id
exports.delete_a_task = function (req, res) {
  console.log(req.params.taskId)
  Task.remove(
    {
      _id: req.params.taskId
    }
    , function (err, task) {
      if (err)
        res.send(err);
      // res.json({ message: 'Task successfully deleted' });
      res.json(task)
    });
};
