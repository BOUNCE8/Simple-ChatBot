const messageModel = require('../models/messages.js');

async function getAllMsg(req, res) {
try {
  const messages = await messageModel.find();

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

async function postMsg(req, res) {
  // console.log("hello im here")
  try {
    const message = req.body;
    console.log('message: ',message);
    const savedMsg = await messageModel.postMsg(message);
    res.status(201);
    res.send(savedMsg)
  } catch (error) {
    console.error(error);
    res.status(500)
    res.send({status: 'fail'});
  }
  
}

module.exports = { getAllMsg, postMsg };
