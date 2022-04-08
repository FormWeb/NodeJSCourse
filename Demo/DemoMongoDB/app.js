const http = require("http")
const url = require("url")

const mongoose = require("mongoose")
const userController = require("./controller/user")
const postController = require("./controller/post")

mongoose.connect("mongodb+srv://moorluck:1234@cluster0.wmybw.mongodb.net/userpostdb?retryWrites=true&w=majority")

http.createServer((req, res) => {
    const currentUrl = url.parse(req.url, true)
    const path = currentUrl.pathname
    const query = currentUrl.query

    console.log(path)

    if (path === "/users" && req.method === "GET") {
        console.log("check")
        userController.getUsers(res)
    }

    if (path === "/users" && req.method === "POST") {
        userController.insertUser(req, res)
    }

    if (path === "/posts" && req.method === "GET") {
        postController.getPosts(res)
    }

    if (path === "/posts" && req.method === "POST") {
        postController.insertPost(req, res)
    }

    if (path === "/posts/users" && req.method === "GET") {
        postController.getUserPosts(res, query.id)
    }

})
.listen(8081)