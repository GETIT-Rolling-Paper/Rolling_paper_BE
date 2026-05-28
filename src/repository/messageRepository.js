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
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const createMessage = async (content, color, password) => {
    const query = `INSERT INTO messages (content, color, password) VALUES (?, ?, ?)`;
    const [result] = await pool.execute(query, [content, color, password]);
    return result.insertId; 
};

module.exports = {
    createMessage
};