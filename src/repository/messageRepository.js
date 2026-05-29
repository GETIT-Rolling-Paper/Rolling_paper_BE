const db = require('../global/config/db');

const findAllMessages = async () => {
    try {
        const [rows] = await db.query('SELECT id, content, nickname, color FROM messages');
        return rows;
    } catch (error) {
        console.error("리포지토리 DB 에러:", error);
        throw error;
    }
};

const createMessage = async (content, nickname, color, password) => {
    const query = `INSERT INTO messages (content, nickname, color, password) VALUES (?, ?, ?, ?)`;
    const [result] = await db.execute(query, [content, nickname, color, password]);
    return result.insertId;
};

const updateMessageById = async (id, content, color) => {
    const query = `UPDATE messages SET content = ?, color = ? WHERE id = ?`;
    await db.execute(query, [content, color, id]);
};

const findPasswordById = async (id) => {
    const [rows] = await db.query('SELECT password FROM messages WHERE id = ?', [id]);
    return rows[0] || null;
};

const deleteMessageById = async (id) => {
    await db.execute('DELETE FROM messages WHERE id = ?', [id]);
};

module.exports = {
    findAllMessages,
    createMessage,
    updateMessageById, 
    findPasswordById,
    deleteMessageById
};