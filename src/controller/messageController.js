const messageService = require('../service/messageService');

const getMessages = async (req, res, next) => {
    try {
        const messages = await messageService.getAllMessages();
        return res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
};

const saveMessage = async (req, res, next) => {
    try {
        const { content, nickname, color, password } = req.body;

        const newMessage = await messageService.registerMessage({ content, nickname, color, password });

        return res.status(201).json({
            success: true,
            message: "익명 메시지가 성공적으로 등록되었습니다!",
            data: newMessage
        });
    } catch (error) {
        next(error);
    }
};

const removeMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        await messageService.deleteMessage(id, password);

        return res.status(200).json({
            success: true,
            message: "메시지가 삭제되었습니다."
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getMessages,
    saveMessage,
    removeMessage
};
