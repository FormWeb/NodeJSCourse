const tweetModel = require("../database/tweet-model")

const tweet = {
    async getAllTweet() {
        const tweets = await tweetModel.get()
        return tweets[0]
    },

    async getTweetByUserId(id) {
        const tweets = await tweetModel.getByUserId(id)
        return tweets[0]
    },

    insertTweet(msg, userId) {
        const msgModif = msg.replaceAll("_", " ")
        return tweetModel.insert(msgModif, userId)
    },

    updateTweet(id, msg) {
        const msgModif = msg.replaceAll("_", " ")
        return tweetModel.update(id, msgModif)
    }
}

module.exports = tweet