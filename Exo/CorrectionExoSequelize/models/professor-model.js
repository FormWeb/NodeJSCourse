const professorModel = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Professor;
}

module.exports = professorModel;