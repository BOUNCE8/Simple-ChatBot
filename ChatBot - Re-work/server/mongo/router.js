const express = require("express");
const router = express.Router();
const messageController = require("./controllers/message.controller");

router.get("/message-log", messageController.getAllMessages);
router.post("/message-log", messageController.saveMessage);

module.exports = router;
