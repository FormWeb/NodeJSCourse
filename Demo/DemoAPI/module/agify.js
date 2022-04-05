const axios = require("axios")

const url = "https://api.agify.io?name="

const agify = {
    async predictAge(name) {
        return axios.get(url + name)
    }
}

module.exports = agify