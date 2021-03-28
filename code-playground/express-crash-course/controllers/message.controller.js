const messageModal = require('../models/message.modal');

function getAllMessages(req, res) {
  const messages = messageModal.findAll();
  res.status(200);
  res.json(messages); // grab the json text
}

function saveMessage (req, res) {
  const message = req.body;
  messageModal.saveMessage(message);
  res.status(201);
  res.json(message);
}

module.exports = {getAllMessages, saveMessage};