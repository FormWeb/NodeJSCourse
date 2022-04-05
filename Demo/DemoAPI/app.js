const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const agify = require("./module/agify.js")

yargs(hideBin(process.argv))
    .command({
        command: "predict",
        describe: "Predict age by a name",
        builder: {
            name: {
                describe: "Name",
                type: "string",
                demandOption: true
            }
        },
        handler(argv) {
            agify.predictAge(argv.name)
                .then(({ data }) => {
                    console.log("L'age prédit pour", data.name, "est de", data.age)
                })
        }
    })
    .parse()