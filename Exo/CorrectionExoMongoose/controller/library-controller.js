const Library = require("../models/library-model")
const getRequestData = require("../helper/get-request-data")

const libraryController = {
    insertLibrary(req, res) {
        getRequestData(req)
            .then((data) => {
                const newLibrary = new Library(data)
                newLibrary.save()
                    .then(() => {
                        res.write(JSON.stringify({ message: "Library inserted" }))
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

    getLibrary(res) {
        Library.find((err, data) => {
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

    getLibraryById(res, id) {
        Library.findOne({ _id: id })
            .populate("books", "title")
            .then((data) => {
                res.write(JSON.stringify(data))
                res.end()
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    },

    deleteLibrary(req, res) {
        getRequestData(req)
            .then((data) => {
                Library.deleteOne({ _id: data.id})
                    .then(() => {
                        res.write(JSON.stringify({ message: "Library deleted" }))
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

    async addBook(req, res) {
        const data = await getRequestData(req)
        Library.findOne({ _id: data.idLibrary })
            .then((library) => {
                library.books.push(data.idBook)
                library.save()
                    .then(() => {
                        res.write(JSON.stringify({ message: "Book added" }))
                        res.end()
                    })
                    .catch(() => {
                        res.write(JSON.stringify({ message: "Error" }))
                        res.end()
                    })
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Error" }))
                res.end()
            })
    }
}

module.exports = libraryController
