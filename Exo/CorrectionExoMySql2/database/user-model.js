const pool = require("./db")

const userModel = {
    get() {
        const sql = "SELECT * FROM users"
        return pool.execute(sql)
    },

    insert(pseudo) {
        const sql = "INSERT INTO users(pseudo) VALUES (?)"
        return pool.execute(sql, [pseudo])
    },

    update(id, pseudo) {
        const sql = "UPDATE users SET pseudo = ? WHERE id = ?"
        return pool.execute(sql, [pseudo, id])
    }
}

module.exports = userModel