const Book = require("../models/book-model")
const getRequestData = require("../helper/get-request-data")

const bookController = {
    insertBook(req, res) {
        getRequestData(req)
            .then((data) => {
                const newBook = new Book(data)
                newBook.save()
                    .then(() => {
                        res.writeHead(200, headers)
                        res.write(JSON.stringify({ message: "Book inserted" }))
                        res.end()
                    })
                    .catch(() => {
                        res.writeHead(400, headers)
                        res.write(JSON.stringify({ message: "Error" }))
                        res.end()
                    })
            })
            .catch((err) => {
                res.writeHead(400, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    },

    getBooks(res) {
        Book.find((err, data) => {
            if (err) {
                res.writeHead(200, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            }
            else {
                res.writeHead(400, headers)
                res.write(JSON.stringify(data))
                res.end()
            }
        })
    },

    getBookById(res, id) {
        Book.findOne({ _id: id })
            .populate("authors", "firstName lastName")
            .then((data) => {
                res.writeHead(200, headers)
                res.write(JSON.stringify(data))
                res.end()
            })
            .catch(() => {
                res.writeHead(400, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    },

    deleteBook(req, res) {
        getRequestData(req)
            .then((data) => {
                Book.deleteOne({ _id: data.id})
                    .then(() => {
                        res.writeHead(200, headers)
                        res.write(JSON.stringify({ message: "Book deleted" }))
                        res.end()
                    })
                    .catch(() => {
                        res.writeHead(400, headers)
                        res.write(JSON.stringify({ message: "Error" }))
                        res.end()
                    })
            })
            .catch((err) => {
                res.writeHead(400, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    }
}

module.exports = bookController
