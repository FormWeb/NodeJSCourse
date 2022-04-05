// Pour importer un bibliothèque
const fs = require("fs")
const fsPromise = require("fs/promises")

// console.log(fs)

console.log("Début")

// Version Sync
// fs.writeFileSync("note.txt", "Bonjour")

// Version asynchrone callback
// fs.writeFile("note.txt", "Bonjour", (err) => {
//     console.log("Fichier écrit avec callback")
// })

// Version asynchrone promesse
fsPromise.writeFile("notes.txt", "Bonjour")
    .then(() => {
        console.log("Fichier écrit avec promesse")
    })
    .catch((err) => {
        console.log("Erreur")
    })
    .finally(() => {
        console.log("S'execute quoi qu'il arrive")
    })

console.log("Fin")


// const data = fs.readFileSync("note.txt")
// console.log(data.toString())