const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const user = require("./module/user.js")

// user.getAllUser()
//     .then((data) => {
//         console.log(data)
//     })

yargs(hideBin(process.argv))
    .command({
        command: "get",
        describe: "Get all users",
        handler() {
            user.getAllUser()
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
    .command({
        command: "insert",
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
            user.insertUser(argv.firstname, argv.lastname)
                .then(() => {
                    console.log("Utilisateur inséré")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
    .parse()