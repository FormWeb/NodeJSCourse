// Exo Recap 01

const inverser = (str) => { // Bonjour => str[6] == "r"
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        const carac = str[i]
        result = result + carac
    }
    return result
}

console.log(inverser("Bonjour"))

// Exo Recap 02

const palindrome = (str) => {
    // Solution 1
    // if (inverser(str) === str) {
    //     return true
    // }
    //
    // return false

    // Solution 2
    return inverser(str) === str
}

console.log(palindrome("Bonjour"))

// Exo Recap 03

const fibonnacci = function(indice) { // 2
    if (indice < 2) {
        return indice
    }

    let nb1 = 0 // 1 => 1
    let nb2 = 1 // 1 => 2

    for (let i = 1; i < indice; i++) {
        const result = nb1 + nb2
        nb1 = nb2
        nb2 = result
    }

    return nb2
}

const fibonnacciRecursive = function(indice) { // 2 | 3
    if (indice < 2) {
        return indice
    }

    return fibonnacciRecursive(indice - 2) + fibonnacciRecursive(indice - 1) // 0 + 1 | 1 + 1 
}

console.log(fibonnacci(6))

// Exo Recap 04

// ["Jean","Jacques", "Jules"]
// ["Jacques", "Jules", "Jean"]
// 

// [5, 2, 1, 3]
function noel(names) {
    const namesRandom = names.sort(
        () => Math.random() - 0.5
    )

    console.log(namesRandom)

    const result = []
    for (let i = 0; i < names.length; i++) {
        if (i < names.length - 1) {
            result.push([names[i], names[i+1]])
        }
        else {
            result.push([names[i], names[0]])
        }
    }

    return result
}

console.log(noel(["Jean", "Jacques", "Jules", ""]))