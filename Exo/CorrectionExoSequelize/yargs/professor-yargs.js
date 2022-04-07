const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command({
        command: "hello",
        handler() {
            console.log("Hello")
        }
    })
    .parse()