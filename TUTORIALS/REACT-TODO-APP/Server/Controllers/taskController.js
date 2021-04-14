const Tasks = require('../Models/taskSchema');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.send(tasks);
    res.status(200);
  } catch (error) {
    console.log(error)
  }
};

// Work on this
exports.updateReminder = async (req, res) => {
  const { id, reminder} = req.params;
  try {
    const task = await Tasks.findByIdAndUpdate(
      { _id: id },
      { reminder: reminder === false ? false : true},
      { new: true }
    );
    // const task = await Tasks.find()
    console.log(task)
    res.send(task)
    res.status(200)
  } catch (error) {
    console.log(error); 
  }
}


exports.addTask = async (req, res) => {
  const newTask = req.body;
  try {
    const addTask = await Tasks.create(newTask);
    res.send(addTask);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Tasks.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
}

