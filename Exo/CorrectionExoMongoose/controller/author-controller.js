const mongoose = require("mongoose")
const Author = require("../models/author-model")
const Book = require("../models/book-model")
const getRequestData = require("../helper/get-request-data")
const headers = require("../helper/response-header")

const authorController = {
    async insertAuthor(req, res) {
        try {
            const data = await getRequestData(req)
            const newAuthor = new Author(data)
            await newAuthor.save()

            res.writeHead(200, headers)
            res.write(JSON.stringify({ message: "Author inserted" }))
            res.end()
        }
        catch (err) {
            res.writeHead(400, headers)
            res.write(JSON.stringify({ message: "Error" }))
            res.end()
        }
    },

    getAuthors(res) {
        Author.find((err, data) => {
            if (err) {
                res.writeHead(400, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            }
            else {
                res.writeHead(200, headers)
                res.write(JSON.stringify(data))
                res.end()
            }
        })
    },

    getAuthorById(res, id) {
        Author.findOne({ _id: id }).populate("books", "title overview")
            .then((author) => {
                res.writeHead(200, headers)
                res.write(JSON.stringify(author))
                res.end()
            })
            .catch(() => {
                res.writeHead(400, headers)
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
        
    },

    async deleteAuthor(req, res) {
        try {
            const data = await getRequestData(req)
            await Author.deleteOne({ _id: data.id })
            res.writeHead(200, headers)
            res.write(JSON.stringify({ message: "Author deleted" }))
            res.end()
        }
        catch (err) {
            res.writeHead(400, headers)
            res.write(JSON.stringify({ message: "Error" }))
            res.end()
        }
    },

    async addBook(req, res) {
        try {
            const data = await getRequestData(req)
            const book = new Book(data.book)
            
            for (const id of data.ids) {
                book.authors.push(id)
            }
            await book.save()
            console.log("hello")
    
            for (const id of data.ids) {
                const author = await Author.findById(id)
                if (author) {
                    author.books.push(book._id)
                    await author.save()
                }
            }

            console.log("hello2")
    
            res.writeHead(200, headers)
            res.write(JSON.stringify({ message: "Fait"}))
            res.end()

        }
        catch (err) {
            console.log(err)
            res.writeHead(400, headers)
            res.write(JSON.stringify({ message: "Error" }))
            res.end()
        }
    }
}

module.exports = authorController
