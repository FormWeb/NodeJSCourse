const mongoose = require("mongoose")
const Schema = mongoose.Schema

const librarySchema = new Schema({
    name: String,
    books: [{ type: Schema.Types.ObjectId, ref: "Book"}]
})

module.exports = mongoose.model("Library", librarySchema)