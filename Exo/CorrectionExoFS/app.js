const fs = require("fs")
const fsPromise = require("fs/promises")

const fileName = "notes.txt"

// Version callback
const readFile = function(callback) {
    fsPromise.readFile(fileName)
        .then((txt) => {
            callback(undefined, txt)
        })
        .catch((err) => {
            callback("Erreur", undefined)
        })
}

// Version promesse
const readFileAsync = async function() {
    return await fsPromise.readFile(fileName)
}

const addNoteSync = function(message) {
    
    fs.readFile(fileName, (err, res) => {
        if (err) {
            return fs.writeFileSync(fileName, message)
        }

        // Avec appendFile
        // fs.appendFileSync(fileName, message + "\n")

        const newText = res.toString() + "\n" + message
        fs.writeFileSync(fileName, newText)

    })
}

const addNoteCallBack = function(message, callback) {
    // Je lis le fichier
    fsPromise.readFile(fileName)
        // Si la promesse est respectée, je récupère les datas
        .then((data) => {
            // Je construis les nouvelles données de mon fichier
            const newText = data.toString() + "\n" + message

            // J'écris dans mon fichier
            fs.writeFile(fileName, newText, (err) => {
                if (err) {
                    // Si je n'ai pas réussi à écrire, j'execute mon callback
                    // avec un paramètre erreur
                    return callback("Erreur")
                }

                // Si j'ai réussi à écrire, j'appelle mon callback avec en
                // paramètre "undifined" pour l'erreur
                callback(undefined)
            })
        })
        // Si j'ai une erreur c'est que le fichier n'existe pas encore
        .catch(() => {
            // Donc j'écris le message dans un nouveau fichier
            fs.writeFile(fileName, message, (err) => {
                if (err) {
                    callback("Erreur")
                }
                callback(undefined)
            })
        })
}

const addNotePromise = function(message, callback) {
    fsPromise.readFile(fileName)
        .then((data) => {
            const newText = data.toString() + "\n" + message
            fsPromise.writeFile(fileName, newText)
                .then(() => {
                    callback(undefined)
                })
                .catch((err) => {
                    console.log(err)
                    callback("Erreur")
                })
        })
        .catch((err) => {
            fsPromise.writeFile(fileName, message)
                .then(() => {
                    callback(undefined)
                })
                .catch(() => {
                    callback("Erreur")
                })
        })
}

const deleteNotes = function() {
    fs.writeFileSync(fileName, "")
}

// Read avec callback
// readFile((err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(result.toString())
// })

// Read avec promesse
// readFileAsync()
//     .then((result) => {
//         console.log(result.toString())
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Ecrire avec callback
// addNoteCallBack("Hello", (err) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Note ajoutée")
// })

// Ecrire avec promesse
// addNotePromise("Goodbye", (err) => {
//     if (err) {
//         return console.log(err)
//     }

//     console.log("Note ajoutée")
// })

// Delete
// deleteNotes()