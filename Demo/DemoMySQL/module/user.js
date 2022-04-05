const userDb = require("../database/userdb.js")

const user = {
    async getAllUser() {
        const users = await userDb.get()
        return users[0]
    },

    insertUser(firstname, lastname) {
        return userDb.insert(firstname, lastname)
    }
}

module.exports = user