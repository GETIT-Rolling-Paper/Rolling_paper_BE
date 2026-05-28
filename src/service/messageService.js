const messageRepository = require('../repository/messageRepository');

const getAllMessages = async () => {
    const rawMessages = await messageRepository.findAllMessages();
    return rawMessages;
};

const registerMessage = async (messageData) => {
    const { content, nickname, color = 'white', password } = messageData;

    if (!password || password.length !== 4) {
        const error = new Error('비밀번호는 반드시 4자리여야 합니다!');
        error.status = 400;
        throw error;
    }

    const insertedId = await messageRepository.createMessage(content, nickname, color, password);

    return {
        id: insertedId,
        content,
        nickname,
        color
    };
};

const deleteMessage = async (id, password) => {
    const row = await messageRepository.findPasswordById(id);

    if (!row) {
        const error = new Error('존재하지 않는 메시지입니다.');
        error.status = 404;
        throw error;
    }

    if (row.password !== password) {
        const error = new Error('비밀번호가 틀렸습니다.');
        error.status = 401;
        throw error;
    }

    await messageRepository.deleteMessageById(id);
};

module.exports = {
    getAllMessages,
    registerMessage,
    deleteMessage
};
