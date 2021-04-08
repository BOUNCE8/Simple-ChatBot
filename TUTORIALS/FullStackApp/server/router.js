const router = require('express').Router();
const {getTopics, addTopic, delTopic, voteTopic } = require('./controllers/topicController');


router.get('/topics', getTopics)
router.post('/topics', addTopic)
router.delete('/topics/:id', delTopic)
router.patch('/topics/id:/:direction', voteTopic)

module.exports = router