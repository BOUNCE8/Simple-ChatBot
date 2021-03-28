const messageModel = require("../models/message.model");

function getAllMessages(req, res) {
  const messages = messageModel.findAll();
  res.status(200);
  res.json(messages);
}

function saveMessage(req, res) {
  const message = req.body;
  messageModel.saveMessage(message);
  res.status(201);
  res.json(message);
}

module.exports = { getAllMessages, saveMessage };
