const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// DB 커넥션 객체 생성
const conn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// 커넥션 실행
conn.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the database");
});

module.exports = conn;