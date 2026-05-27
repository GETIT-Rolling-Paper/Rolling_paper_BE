const express = require('express');
const cors = require('cors');
require('dotenv').config();

const messageRouter = require('./routes/messageRouter');
const { errorHandler } = require('./global/error/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 

app.use('/api/messages', messageRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 달리는 중!`);
});