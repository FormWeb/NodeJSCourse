const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const user = require("./module/user")
const pool = require("./database/db")
const tweet = require("./module/tweet")
const { describe } = require("yargs")

yargs(hideBin(process.argv))
    // User commands
    // Get all users
    .command({
        command: "get-users",
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
    // Insert user
    .command({
        command: "insert-user",
        describe: "Insert a new user",
        builder: {
            pseudo: {
                describe: "Pseudo of the user",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            user.insert(argv.pseudo)
                .then(() => {
                    console.log("Utilisateur inséré")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
    // Update
    .command({
        command: "update-user",
        describe: "Update a user",
        builder: {
            id: {
                describe: "ID of the user",
                type: "string",
                demandOption: true
            },
            pseudo: {
                describe: "Pseudo of the user",
                type: "string",
                demandOption: true
            }
        },
        handler({ id, pseudo }) {
            user.updatePseudo(id, pseudo)
                .then(() => {
                    console.log("User updated")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
    // Tweet command
    // Get all tweets
    .command({
        command: "get-tweets",
        describe: "Get all tweets",
        handler() {
            tweet.getAllTweet()
                .then((data) => {
                    console.log(data)
                })
        }
    })
    // Get tweet by user id
    .command({
        command: "get-tweets-by-id",
        describe: "Get tweet by user id",
        builder: {
            id: {
                describe: "User id",
                type: "number",
                demandOption: true
            }
        },
        handler(argv) {
            tweet.getTweetByUserId(argv.id)
                .then((data) => {
                    console.log(data)
                })
        }
    })
    // Insert tweet
    .command({
        command: "insert-tweet",
        describe: "Insert a tweet",
        builder: {
            userid: {
                describe: "User id",
                type: "number",
                demandOption: true
            },

            message: {
                describe: "Message",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            tweet.insertTweet(argv.message, argv.userid)
        }
    })
    // Update tweet
    .command({
        command: "update-tweet",
        describe: "Update a tweet",
        builder: {
            id: {
                describe: "Tweet id",
                type: "number",
                demandOption: true
            },

            message: {
                describe: "Message",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            tweet.updateTweet(argv.id, argv.message)
                .then(() => {
                    console.log("Tweet updated")
                })
        }
    })
    .parse()

pool.end()

