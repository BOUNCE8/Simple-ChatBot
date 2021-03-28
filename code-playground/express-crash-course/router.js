const express = require('express');
const router = express.Router();
const members = require('./models/Members');
const messageController = require('./controllers/message.controller');

// Get our member list
router.get('/api/members', (req, res) => res.json(members))

// Get random response messages
router.get('/messages', messageController.getAllMessages);

// Post response messages
router.post('/', (req, res) => res.json());

module.exports = router;