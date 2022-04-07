const db = require('../models/db');

const courseController = {
    getAllCourses() {
        return db.Course.findAll();
    },

    getCourseById(id) {
        return db.Course.findByPk(id);
    },

    insertCourse(course) {
        return db.Course.create(course);
    },

    updateCourse(id, course) {
        return db.Course.update(course, { where: { id: id } });
    },

    async associateProfessor(id, professorId) {
        const course = await db.Course.findByPk(id);
        const professor = await db.Professor.findByPk(professorId);
        return course.setProfessor(professor);
    }
}

module.exports = courseController;