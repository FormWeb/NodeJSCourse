const fs = require("fs")
const fsPromise = require("fs/promises")

const filePath = "./data/notes.json"

const note = {
    addNoteCallBack(name, number, callback) {
        console.log("add note call back")

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "[]")
        }
        fsPromise.readFile(filePath)
            .then((result) => {
                const data = JSON.parse(result)
                data.push({name: name, number: number})
                fsPromise.writeFile(filePath, JSON.stringify(data))
                    .then(() => {
                        callback(undefined)
                    })
                    .catch(() => {
                        callback("Erreur au moment de l'écriture")
                    })
            })
            .catch(() => {
                callback("Erreur au moment de la lecture")
            })
    },

    async addNote(name, number) {
        console.log("add note")

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "[]")
        }
        // On attend le résultat de la promesse avant de passer à la ligne suivante,
        // Si il y a une erreur, elle sera soulevé par le catch au moment de l'appel de la fonction
        const result = await fsPromise.readFile(filePath)
        const data = JSON.parse(result)
        data.push({name: name, number: number})
        return fsPromise.writeFile(filePath, JSON.stringify(data))
    },

    async removeNote(name) {
        console.log("remove note")

        if (fs.existsSync(filePath)) {
            const result = await fsPromise.readFile(filePath)
            const data = JSON.parse(result)

            const newDate = data.filter((note) => note.name !== name)
            return fsPromise.writeFile(filePath, JSON.stringify(newDate))
        }
    },

    async getNote() {
        const result = await fsPromise.readFile(filePath)
        return JSON.parse(result)
    },

    async getNoteByName(name) {
        console.log("get note by name")
        const result = await fsPromise.readFile(filePath)
        const data = JSON.parse(result)
        return data.filter((note) => note.name === name)
    }
}

module.exports = note