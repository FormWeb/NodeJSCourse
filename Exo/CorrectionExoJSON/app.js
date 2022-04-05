const note = require("./modules/note.js")

// Ajout avec callback
// note.addNoteCallBack("Jules", "045678912", (err) => {
//     if (err) {
//         return console.log(err)
//     }

//     console.log("Number added")
// })

// Ajout avec async
// note.addNote("Jacques", "045678912")
//     .then(() => {
//         console.log("Numéro ajouté")
//     })
//     .catch((err) => {
//         if (err.code === "ENOENT") {
//             console.log("Pas de fichier avec ce nom")
//         }
//         console.log("Une erreur est survenue")
//     })

// Suppression
// note.removeNote("Jules")
//     .then(() => {
//         console.log("note supprimée")
//     })
//     .catch(() => {
//         console.log("une erreur est survenue")
//     })

// Récupérer tous les numéro
// note.getNote()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(() => {
//         console.log("Une erreur est survenur")
//     })

// Récupérer via le nom
note.getNoteByName("Jean")
    .then((data) => {
        console.log(data)
    })