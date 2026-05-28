const messageService = require('../service/messageService');

const getMessages = async (req, res) => {
    try {

        const messages = await messageService.getAllMessages();

        return res.status(200).json(messages);
    } catch (error) {
        console.error("컨트롤러 에러:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

module.exports = {
    getMessages
};