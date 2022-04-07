const studentModel = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
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

    return Student;
}

module.exports = studentModel;