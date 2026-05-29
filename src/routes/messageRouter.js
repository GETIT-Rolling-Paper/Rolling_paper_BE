const express = require('express');
const router = express.Router();
const messageController = require('../controller/messageController');

router.get('/', messageController.getMessages);
router.post('/', messageController.saveMessage);
router.put('/:id', messageController.updateMessage);
router.delete('/:id', messageController.removeMessage);

module.exports = router;
