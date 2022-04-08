const getRequestData = require("../helper/get-request-data")
const Post = require("../models/post-model")

const postController = {
    getPosts(res) {
        Post.find()
            .then((result) => {
                res.write(JSON.stringify(result))
                res.end()
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Erreur"}))
                res.end()
            })
    },

    getUserPosts(res, id) {
        Post.find({ user: id }, "title content", (err, result) => {
            if (err) {
                res.write(JSON.stringify({ message: "Erreur"}))
                res.end()
            }
            else {
                res.write(JSON.stringify(result))
                res.end()
            }
        })
    },

    insertPost(req, res) {
        getRequestData(req)
            .then((data) => {
                const newPost = new Post(data)
                newPost.save()
                    .then(() => {
                        res.write(JSON.stringify({ message: "Post inséré"}))
                        res.end()
                    })
                    .catch(() => {
                        res.write(JSON.stringify({ message: "Erreur"}))
                        res.end()
                    })
            })
    }
}

module.exports = postController