const express = require("express");
const router = express.Router();
const messageController = require("./controllers/message.controller");

router.get("/messages", messageController.getAllMessages);
router.post("/mconst routeressages", messageController.saveMessage);

module.exports = router;
