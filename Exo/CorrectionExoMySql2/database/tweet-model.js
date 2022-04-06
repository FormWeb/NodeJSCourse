const pool = require("./db")

const tweetModel = {
    get() {
        const sql = "SELECT * FROM tweets"
        return pool.execute(sql)
    },

    getByUserId(id) {
        const sql = "SELECT * FROM tweets WHERE userid = ?"
        return pool.execute(sql, [id])
    },

    insert(msg, userId) {
        const sql = "INSERT INTO tweets(message, userid) VALUES (?, ?)"
        return pool.execute(sql, [msg, userId])
    },

    update(id, msg) {
        const sql = "UPDATE tweets SET message = ? WHERE id = ?"
        return pool.execute(sql, [msg, id])
    }
}

module.exports = tweetModel