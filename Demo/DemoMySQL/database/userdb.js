const pool = require("./db.js")

const tableName = "users"

const userDb = {
    get() {
        const sql = `SELECT * FROM ${tableName}`
        return pool.execute(sql)
    },

    insert(firstname, lastname) {
        const sql = `INSERT INTO ${tableName}(firstname, lastname) VALUES (?, ?)`
        return pool.execute(sql, [firstname, lastname])
    }
}

module.exports = userDb