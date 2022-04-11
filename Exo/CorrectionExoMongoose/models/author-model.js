const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    books: [{ type: Schema.Types.ObjectId, ref: "Book"}]
})

module.exports = mongoose.model("Author", authorSchema)

