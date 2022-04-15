const mongoose = require("mongoose")
const http = require("http")
const url = require("url")
const authorController = require("./controller/author-controller")
const bookController = require("./controller/book-controller")
const libraryController = require("./controller/library-controller")

mongoose.connect("mongodb+srv://moorluck:1234@cluster0.wmybw.mongodb.net/bookdb?retryWrites=true&w=majority")

http.createServer((req, res) => {
    const currentUrl = url.parse(req.url, true)
    const path = currentUrl.pathname
    const query = currentUrl.query

    console.log(path)
    console.log(query)
    console.log(req.method)

    // if (req.method==="OPTIONS") {
    //     res.end()
    // }

    // Author path

    
    if (path === "/author" && req.method === "GET" && !query.id) {
        authorController.getAuthors(res)
    }

    if (path === "/author/id" && req.method === "GET" && query.id) {
        authorController.getAuthorById(res, query.id)
    }

    if (path === "/author" && req.method === "POST") {
        authorController.insertAuthor(req, res)
    }

    if (path === "/author" && req.method === "DELETE") {
        authorController.deleteAuthor(req, res)
    }


    if (path === "/author/book" && req.method === "POST") {
        authorController.addBook(req, res)
    }

    // Book path

    if (path === "/book" && req.method === "GET") {
        bookController.getBooks(res)
    }

    if (path === "/book/id" && req.method === "GET" && query.id) {
        bookController.getBookById(res, query.id)
    }

    if (path === "/book" && req.method === "POST") {
        bookController.insertBook(req, res)
    }

    if (path === "/book" && req.method === "DELETE") {
        bookController.deleteBook(req, res)
    }

    // Library path

    if (path === "/library" && req.method === "GET") {
        libraryController.getLibrary(res)
    }

    if (path === "/library/id" && req.method === "GET" && query.id) {
        libraryController.getLibraryById(res, query.id)
    }

    if (path === "/library" && req.method === "POST") {
        libraryController.insertLibrary(req, res)
    }

    if (path === "/library" && req.method === "DELETE") {
        libraryController.deleteLibrary(req, res)
    }

    if (path === "/library/book" && req.method === "POST") {
        libraryController.addBook(req, res)
    }



    
})
    .listen(3000)