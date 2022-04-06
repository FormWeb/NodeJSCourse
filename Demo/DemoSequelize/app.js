const db = require("./model/db")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const userController = require("./controller/user")

db.sequelize.sync()
    .then(() => {
        yargs(hideBin(process.argv))
            .command({
                command: "get-users",
                describe: "Get all users",
                handler() {
                    userController.getAllUsers()
                        .then((data) => {
                            console.log(data)
                        })
                }
            })
            .command({
                command: "insert-user",
                describe: "Insert a user",
                builder: {
                    firstname: {
                        describe: "First name", 
                        type: "string",
                        demandOption: true
                    },
                    lastname: {
                        describe: "Last name", 
                        type: "string",
                        demandOption: true
                    }
                },
                handler(argv) {
                    userController.insertUser(argv.firstname, argv.lastname)
                        .then(() => {
                            console.log("Utilisateur inséré")
                        })
                }
            })
            .parse()
    })