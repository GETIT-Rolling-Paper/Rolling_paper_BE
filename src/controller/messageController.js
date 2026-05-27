const messageService = require('../service/messageService');

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
    saveMessage
};