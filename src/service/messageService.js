const messageRepository = require('../repository/messageRepository');

const registerMessage = async (messageData) => {
    const { content, color, password } = messageData;

    if (!password || password.length !== 4) {
        const error = new Error('비밀번호는 반드시 4자리여야 합니다!');
        error.status = 400;
        throw error;
    }

    const insertedId = await messageRepository.createMessage(content, color, password);
    
    return {
        id: insertedId,
        content,
        color
    };
};

module.exports = {
    registerMessage
};