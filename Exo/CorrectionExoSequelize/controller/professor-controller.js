const db = require('../models/db');

const professorController = {
    getAllProfessors() {
        return db.Professor.findAll();
    },

    getProfessorById(id) {
        return db.Professor.findByPk(id);
    },

    insertProfessor(professor) {
        return db.Professor.create(professor);
    }, 

    updateProfessor(id, professor) {
        return db.Professor.update(professor, { where: { id: id } });
    },

    async getProfessorCourses(id) {
        const professor = await db.Professor.findByPk(id);
        return professor.getCourses();
    }
}

module.exports = professorController;