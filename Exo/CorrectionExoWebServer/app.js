const db = require("./model/db")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const userController = require("./controller/user")
const postController = require("./controller/post")

const http = require("http")
const url = require("url")

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        let body = ""
        req.on("data", data => {
            body += data
        })
        req.on("end", () => {
            resolve(JSON.parse(body))
        })

    })
}

db.sequelize.sync()
    .then(() => {
        http.createServer((req, res) => {
            const currentUrl = url.parse(req.url, true)
            const path = currentUrl.pathname
            const query = currentUrl.query

            res.writeHead(200, { "Content-Type": "application/json" })

            if (path === "/users" && req.method === "GET") {
                userController.getAllUsers(res)
            }

            if (path === "/users" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.insertUser(res, data.firstname, data.lastname)
                    })
            }

            if (path === "/posts" && req.method === "GET") {
                postController.getAllPosts(res)
            }

            if (path === "/posts" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        postController.insertPost(res, data.title, data.content, data.userId)
                    })
            }
        })
        .listen(8080)
    })