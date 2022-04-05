const movie = require("./modules/movie.js")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")

// movie.getPopularMovies(2)
//     .then(({ data }) => {
//         console.log(data)
//     })

yargs(hideBin(process.argv))
    // Get popular
    .command({
        command: "get-popular",
        describe: "Get most popular movies",
        builder: {
            page: {
                describe: "Page",
                type: "string",
            }
        },
        handler(argv) {
            if (argv.page) {
                movie.getPopularMovies(argv.page)
                    .then(({ data }) => {
                        console.log(data)
                    })
            }
            else {
                movie.getPopularMovies(1)
                    .then(({ data }) => {
                        console.log(data)
                    })
            }
        }
    })
    // Get top rated
    .command({
        command: "get-top-rated",
        describe: "Get top rated movies",
        builder: {
            page: {
                describe: "Page",
                type: "string"
            }
        },
        handler(argv) {
            if (argv.page) {
                movie.getTopRatedMovies(argv.page)
                    .then(({ data }) => {
                        console.log(data)
                    })
            }
            else {
                movie.getTopRatedMovies(1)
                    .then(({ data }) => {
                        console.log(data)
                    })
            }
        }
    })
    // Search movie
    .command({
        command: "search",
        describe: "Search a movie",
        builder: {
            name: {
                describe: "Name of the movie",
                type: "string",
                demandOption: true
            },
            page: {
                describe: "Page",
                type: "string"
            }
        },
        handler(argv) {
            if (argv.page) {
                movie.searchMovie(argv.name, argv.page)
                    .then(({ data }) => {
                        console.log(data)
                    })
            }
            else {
                movie.searchMovie(argv.name, 1)
                    .then((movie) => {
                        console.log(movie)
                    })
            }
        }
    })
    .parse()