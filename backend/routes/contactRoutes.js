const express = require('express');
const router = express.Router();
const { getMessages, createMessage, deleteMessage } = require('../controllers/messageController');

router.route('/')
    .get(getMessages)
    .post(createMessage);

router.route('/:id')
    .delete(deleteMessage);

module.exports = router;
