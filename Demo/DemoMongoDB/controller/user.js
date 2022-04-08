const getRequestData = require("../helper/get-request-data")
const User = require("../models/user-model")

const userController = {
    getUsers(res) {
        console.log("pass controller")
        User.find((err, results) => {
            if (err) {
                res.write(JSON.stringify({ message: "Erreur" }))
                res.end()
            }
            else {
                res.write(JSON.stringify(results))
                res.end()
            }
        })
    },

    insertUser(req, res) {
        getRequestData(req)
            .then((data) => {
                const newUser = new User(data)
                newUser.save()
                    .then(() => {
                        res.write(JSON.stringify({ message: "User inserted" }))
                        res.end()
                    })
                    .catch(() => {
                        res.write(JSON.stringify({ message: "Erreur" }))
                        res.end()
                    })
            })
    }
}

module.exports = userController