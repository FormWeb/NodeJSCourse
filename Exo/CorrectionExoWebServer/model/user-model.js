const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname : {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return User
}

module.exports = userModel