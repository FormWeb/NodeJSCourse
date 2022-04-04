const fs = require("fs")

const fileName = "./data/note.json"

const addNote = function(titre, contenu) {
    if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, "[]")
    }

    // JSON.parse permet de transformer une chaine de caractère en objet Javascript
    const data = JSON.parse(fs.readFileSync(fileName))
    data.push({titre: titre, contenu: contenu})
    // JSON.stringify permet de transformer un objet js en chaine de caractere
    fs.writeFileSync(fileName, JSON.stringify(data))
}

addNote("Diner", "Faire les courses")