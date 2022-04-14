const Book = require("../models/book-model")
const getRequestData = require("../helper/get-request-data")

const bookController = {
    insertBook(req, res) {
        getRequestData(req)
            .then((data) => {
                const newBook = new Book(data)
                newBook.save()
                    .then(() => {
                        res.write(JSON.stringify({ message: "Book inserted" }))
                        res.end()
                    })
                    .catch(() => {
                        res.write(JSON.stringify({ message: "Error" }))
                        res.end()
                    })
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    },

    getBooks(res) {
        Book.find((err, data) => {
            if (err) {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            }
            else {

                res.write(JSON.stringify(data))
                res.end()
            }
        })
    },

    getBookById(res, id) {
        Book.findOne({ _id: id })
            .populate("authors", "firstName lastName")
            .then((data) => {
                res.write(JSON.stringify(data))
                res.end()
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    },

    deleteBook(req, res) {
        getRequestData(req)
            .then((data) => {
                Book.deleteOne({ _id: data.id})
                    .then(() => {
                        res.write(JSON.stringify({ message: "Book deleted" }))
                        res.end()
                    })
                    .catch(() => {
                        res.write(JSON.stringify({ message: "Error" }))
                        res.end()
                    })
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    }
}

module.exports = bookController
