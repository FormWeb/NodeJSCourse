// Exemple fonction

function multiplierPar2(x) { // x représente n'import quelle valeur
    return x * 2
}

const multiplierPar3 = function(x) { // Fonction dans une constante
    return x * 3
}

const multiplierPar4 = (x) => {
    return x * 4
}

const multiplierPar5 = (x) => (x * 5) // return sous entendu par les parenthèse

const result = multiplierPar3(5)
console.log(result)

// Reminder boucle

// While
let i = 0
while (i < 4) {
    console.log(i)
    i++
}

// For i
for (let i = 0; i < 4; i++) {
    console.log(i)
}

// For element of tab
const tabName = ["David", "Alexis", "Ola"]
for (const element of tabName) { // Boucle sur un tableau
    console.log(element)
}

for (const element of tabName[0]) { // Boucle sur une chaine de caractère
    console.log(element)
}

// Objet

const voiture1 = {
    marque: "Audi",
    model: "A5",
    kilometre: 1000,
    rouler() { // Fonction dans un objet
        console.log(`La voiture ${this.marque} roule !`)
    }
}

voiture1.rouler()

// Callback

const doCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 42)
        // callback("Error", undefined)
    }, 2000)
}

doCallback((err, result) => {
    if (err) {
        return console.log(err)
    }

    console.log(result)
})

// Tableau imbriqué

const oxo = [
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "O", "X"]
]

console.log(oxo[1][1])