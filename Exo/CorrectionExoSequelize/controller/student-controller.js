const db = require('../models/db');

const studentController = {
    getAllStudents() {
        return db.Student.findAll();
    },

    getStudentById(id) {
        return db.Student.findByPk(id);
    },
    
    insertStudent(student) {
        return db.Student.create(student);
    },

    updateStudent(id, student) {
        return db.Student.update(student, { where: { id: id } });
    },

    async getStudentCourses(id) {
        const student = await db.Student.findByPk(id);
        return student.getCourses();
    },

    async associateStudentToCourse(studentId, courseId) {
        const student = await db.Student.findByPk(studentId);
        const course = await db.Course.findByPk(courseId);
        return student.addCourse(course);
    }
}

module.exports = studentController;