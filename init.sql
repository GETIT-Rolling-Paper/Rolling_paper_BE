
CREATE DATABASE IF NOT EXISTS rolling_paper;
USE rolling_paper;

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- 메시지 고유 번호
    content TEXT NOT NULL,                      -- 익명 메시지 내용
    nickname VARCHAR(50) DEFAULT '익명',        -- 작성자 별명
    color VARCHAR(20) DEFAULT 'white',          -- 포스트잇 색상
    password VARCHAR(4) NOT NULL,               -- 삭제용 4자리 비밀번호
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 작성 시간
);