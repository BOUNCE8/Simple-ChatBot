const router = require('express').Router();
const { getTasks, addTask, updateReminder, deleteTask } = require('./Controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id/:reminder', updateReminder);
router.delete('/:id', deleteTask);

module.exports = router;
