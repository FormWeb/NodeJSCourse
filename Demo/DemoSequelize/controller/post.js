const db = require("../model/db")

const postController = {
    getAllPosts() {
        return db.Post.findAll()
    },

    insertPost(title, content, userId) {
        return db.Post.create({
            title: title,
            content: content,
            UserId: userId
        })
    }
}

module.exports = postController