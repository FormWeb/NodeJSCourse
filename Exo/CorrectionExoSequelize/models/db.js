require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    Student: require('./student-model')(sequelize, DataTypes),
    Professor: require('./professor-model')(sequelize, DataTypes),
    Course: require('./course-model')(sequelize, DataTypes)
}

db.Student.belongsToMany(db.Course, { through: 'StudentCourse' });
db.Course.belongsToMany(db.Student, { through: 'StudentCourse' });

db.Professor.hasMany(db.Course);
db.Course.belongsTo(db.Professor);

module.exports = db;