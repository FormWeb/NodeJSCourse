const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    authors: [{ type: Schema.Types.ObjectId, ref: "Author"}],
    title: String,
    overview: String
})

module.exports = mongoose.model("Book", bookSchema)