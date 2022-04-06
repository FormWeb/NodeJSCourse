const userModel = require("../database/user-model")

const user = {
    async getAllUser() {
        const users = await userModel.get()
        return users[0]
    },

    insert(pseudo) {
        return userModel.insert(pseudo)
    },

    updatePseudo(id, pseudo) {
        return userModel.update(id, pseudo)
    }
}

module.exports = user