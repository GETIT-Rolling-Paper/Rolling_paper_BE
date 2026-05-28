const messageService = require('../service/messageService');

const getMessages = async (req, res) => {
    try {

        const messages = await messageService.getAllMessages();

        return res.status(200).json(messages);
    } catch (error) {
        console.error("컨트롤러 에러:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
const saveMessage = async (req, res,彻) => {
    try {
        const { content, color, password } = req.body;

        const newMessage = await messageService.registerMessage({ content, color, password });

        return res.status(201).json({
            success: true,
            message: "익명 메시지가 성공적으로 등록되었습니다!",
            data: newMessage
        });
    } catch (error) {
        next(error); 
    }
};

module.exports = {
    getMessages
    saveMessage
};