const mysql = require("mysql2")

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "testuserdb",
    password: "1234"
}).promise()

module.exports = pool