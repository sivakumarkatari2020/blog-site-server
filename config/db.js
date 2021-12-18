const mysql = require('mysql');

const db = mysql.createPool({
    password: "123456",
    user: "root",
    host:'localhost',
    database: "blog_site"
});

module.exports = db;
