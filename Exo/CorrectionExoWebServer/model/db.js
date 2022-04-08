require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize") // Sequelize permet d'accéder à la librairie
const postModel = require("./post-model")
const userModel = require("./user-model")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // Un peu l'équivalent du pool
    host: process.env.DB_HOST,
    dialect: "mysql"
})

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: userModel(sequelize, DataTypes),
    Post: postModel(sequelize, DataTypes)
}

db.User.hasMany(db.Post)
db.Post.belongsTo(db.User, {
    allowNull: false
})

module.exports = db