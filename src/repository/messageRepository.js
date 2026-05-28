const db = require('../global/config/db');

const findAllMessages = async () => {
    try {
        const [rows] = await db.query('SELECT id, content, color FROM messages');

        return rows; 
    } catch (error) {
        console.error("리포지토리 DB 에러:", error);
        throw error;
        }
};

module.exports = {
    findAllMessages
};