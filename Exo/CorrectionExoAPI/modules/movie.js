const axios = require("axios")

const API_KEY = "c9e23b610c2f0c1040a493fc10ce5aaf"

const baseURL = "https://api.themoviedb.org/3/"

const popularURL = `${baseURL}movie/popular?api_key=${API_KEY}&language=fr-BE&page=__page__`
const topRatedURL = `${baseURL}movie/top_rated?api_key=${API_KEY}&language=fr-BE&page=__page__`
const searchURL = `${baseURL}search/movie?api_key=${API_KEY}&language=fr-BE&page=__page__&query=__query__`

const movie = {
    getPopularMovies(page) {
        return axios.get(popularURL.replace("__page__", page))
    },

    getTopRatedMovies(page) {
        return axios.get(topRatedURL.replace("__page__", page))
    },

    async searchMovie(name, page) {
        const data = await axios.get(searchURL.replace("__page__", page).replace("__query__", name))
        return data.data.results[0]
    }
}

module.exports = movie