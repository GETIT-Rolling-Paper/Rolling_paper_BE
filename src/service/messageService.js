const messageRepository = require('../repository/messageRepository');

const getAllMessages = async () => {
    const rawMessages = await messageRepository.findAllMessages();

    return rawMessages;
};

module.exports = {
    getAllMessages
};