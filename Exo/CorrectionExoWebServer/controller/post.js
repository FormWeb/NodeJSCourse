const db = require("../model/db")

const postController = {
    getAllPosts(res) {
        db.Post.findAll()
            .then((data) => {
                res.write(JSON.stringify(data.map(
                    elem => elem.toJSON()
                )))
                res.end()
            })
    },

    insertPost(res, title, content, userId) {
        db.Post.create({
            title: title,
            content: content,
            UserId: userId
        })
            .then(() => {
                res.write(JSON.stringify({ message: "Post inserted" }))
                res.end()
            })
    }
}

module.exports = postController