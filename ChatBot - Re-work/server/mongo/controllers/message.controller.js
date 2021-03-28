const messageModel = require('../models/messages');

async function getAllMessages(req, res) {
try {
  const messages = await messageModel.findMessages();

  const resultMsg = messages.map(message => {
    message.timestamp = +message.timestamp
    return message
  });
  console.log("result msg:",resultMsg);
    res.status(200);
    res.send(resultMsg);
  } catch (error) {
    console.error(error);
    res.status(500);
    res.send({status: 'fail'});
  }

}

async function saveMessage(req, res) {
  // console.log("hello im here")
  try {
    const message = req.body;
    console.log(message);
    const savedMsg = await messageModel.postMessages(message);
    res.status(201);
    res.send(savedMsg)
  } catch (error) {
    console.error(error);
    res.status(500)
    res.send({status: 'fail'});
  }
  
}

module.exports = { getAllMessages, saveMessage };
