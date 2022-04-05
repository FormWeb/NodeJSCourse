// Attention il faut installer la 4.1.2 avec npm install --save chalk@4.1.2
const chalk = require("chalk")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")

yargs(hideBin(process.argv))
    // Crée la commande bonjour
    .command({  
        // Nom de la commande
        command: "bonjour",
        // Description
        describe: "Dis bonjour à quelqu'un",
        // Les différents paramètres
        builder: {
            name: {
                describe: "Le nom à qui il faut dire bonjour",
                type: "string",
                demandOption: true
            }
        },
        // La fonction appelé lors de la commande
        handler(argv) {
            console.log("Bonjour", chalk.green(argv.name))
        }
    })
    // Deuxième commande
    .command({
        command: "au-revoir",
        // Description
        describe: "Dis au revoir à quelqu'un",
        // Les différents paramètres
        builder: {
            name: {
                describe: "Le nom à qui il faut dire au revoir",
                type: "string",
                demandOption: true
            }
        },
        // La fonction appelé lors de la commande
        handler(argv) {
            console.log("Au revoir", chalk.green(argv.name))
        }
    })
    .parse()