const express = require("express");
const router = express.Router();
const messageController = require("./controllers/message.controller");

router.get("/message-log", messageController.getAllMsg);
router.post("/message-log", messageController.postMsg);

module.exports = router;
