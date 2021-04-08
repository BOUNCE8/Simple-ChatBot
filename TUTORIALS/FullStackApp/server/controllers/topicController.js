const Topic = require('../models/topics');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.send(topics)
    res.status(200);
  } catch (error) {
    console.log(error);
  }
}

exports.addTopic = async (req, res) => {
  const newTopic = req.body;
  try {
    const addTopic = await Topic.create(newTopic);
    res.send(addTopic);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
  

}

exports.delTopic = () => {

}

exports.voteTopic = () => {

}
