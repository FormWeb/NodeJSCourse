const note = require("./modules/note.js")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const chalk = require("chalk")

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
// note.getNoteByName("Jean")
//     .then((data) => {
//         console.log(data)
//     })

yargs(hideBin(process.argv))
    // Commande pour ajouter un numéro
    .command({
        command: "add",
        describe: "Add a new number",
        builder: {
            name: {
                describe: "Name",
                type: "string",
                demandOption: true
            },
            number: {
                describe: "Number",
                type: "string",
                demandOption: true
            }
        },

        handler(argv) {
            note.addNote(argv.name, argv.number)
                .then(() => {
                    console.log("Numéro ajouté")
                })
                .catch((err) => {
                    if (err.code === "ENOENT") {
                        console.log("Pas de fichier avec ce nom")
                    }
                    console.log("Une erreur est survenue")
                })
        }
    })
    // Commande pour supprimer un numéro
    .command({
        command: "remove",
        describe: "Remove a number",
        builder: {
            name: {
                describe: "Name",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            note.removeNote(argv.name)
                .then(() => {
                    console.log("note supprimée")
                })
                .catch(() => {
                    console.log("une erreur est survenue")
                })
        }
    })
    // Récupérer les numéros
    .command({
        command: "list",
        describe: "Get all the number",
        handler() {
            note.getNote()
                .then((data) => {
                    for (const element of data) {
                        console.log(chalk.green.bold(element.name), ":", chalk.blue(element.number))
                    }
                })
                .catch((err) => {
                    console.log("Une erreur est survenue")
                })
        }
    })
    // Récupérer un numéro par le nom
    .command({
        command: "get",
        describe: "Get number by name",
        builder: {
            name: {
                describe: "Name",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            note.getNoteByName(argv.name)
                .then((data) => {
                    for (const element of data) {
                        console.log(chalk.green.bold(element.name), ":", chalk.blue(element.number))
                    }
                })
                .catch((err) => {
                    console.log("Une erreur est survenue")
                })
        }
    })
    .parse()

