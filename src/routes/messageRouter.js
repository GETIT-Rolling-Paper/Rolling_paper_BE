const express = require('express');
const router = express.Router();
const messageController = require('../controller/messageController');

router.get('/messages', messageController.getMessages);
router.post('/', messageController.saveMessage);

module.exports = router;