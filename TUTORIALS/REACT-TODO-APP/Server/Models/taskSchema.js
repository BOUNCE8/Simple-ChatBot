const mongoose = require('./index');
const Schema = mongoose.Schema;

const taskSchema = Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  reminder: {
    type: Boolean
  }
});

const TaskSchema = mongoose.model('tasks', taskSchema);
module.exports = TaskSchema;