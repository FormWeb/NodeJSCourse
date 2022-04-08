const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const postSchema = new Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    user: { type: ObjectId, ref: "User" }
})

module.exports = mongoose.model("Post", postSchema)