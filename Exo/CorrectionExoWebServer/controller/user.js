const db = require("../model/db")

const userController = {
    getAllUsers(res) {
        db.User.findAll()
            .then((result) => {
                res.write(JSON.stringify(result.map(
                    elem => elem.toJSON()
                )))
                res.end()
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Erreur" }))
                res.end()
            })
    },

    insertUser(res, firstname, lastname) {
        db.User.create({
            firstname: firstname,
            lastname: lastname
        })
            .then(() => {
                res.write(JSON.stringify({ message: "User inserted" }))
                res.end()
            })
            
            .catch((err) => {
                console.log(err)
                res.write(JSON.stringify({ message: "Erreur" }))
                res.end()
            })
    }
}

module.exports = userController