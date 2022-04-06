const db = require("../model/db")

const userController = {
    getAllUsers() {
        return db.User.findAll()
    },

    insertUser(firstname, lastname) {
        return db.User.create({
            firstname: firstname,
            lastname: lastname
        })
    }
}

module.exports = userController