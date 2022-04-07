const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const studentController = require('../controller/student-controller');

yargs(hideBin(process.argv))
    .command({
        command: 'get-all-students',
        describe: 'Get all students',
        handler: () => {
            studentController.getAllStudents()
                .then(students => {
                    console.log(students);
                })
        }
    })
    .command({
        command: 'get-student-by-id',
        describe: 'Get student by id',
        builder: {
            id: {
                describe: 'Student id',
                type: 'number',
                demandOption: true
            }
        },
        handler(args) {
            studentController.getStudentById(args.id)
                .then(student => {
                    console.log(student);
                })
        }
    })
    .command({
        command: 'insert-student',
        describe: 'Insert student',
        builder: {
            firstName: {
                describe: 'Student first name',
                type: 'string',
                demandOption: true
            },
            lastName: {
                describe: 'Student last name',
                type: 'string',
                demandOption: true
            },
            email: {
                describe: 'Student email',
                type: 'string',
                demandOption: true
            }
        },
        handler(args) {
            studentController.insertStudent({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email
            })
                .then(() => {
                    console.log("Eleve ajouté");
                })
        }
    })
    .command({
        command: 'update-student',
        describe: 'Update student',
        builder: {
            id: {
                describe: 'Student id',
                type: 'number',
                demandOption: true
            },
            firstName: {
                describe: 'Student first name',
                type: 'string'
            },
            lastName: {
                describe: 'Student last name',
                type: 'string'
            },
            email: {
                describe: 'Student email',
                type: 'string'
            }
        },
        handler(args) {
            studentController.updateStudent(args.id, {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email
            })
                .then(data => {
                    console.log(data);
                    if (data[0] === 0) {
                        console.log("Rien a été modifié")
                    }
                })
        }

    })
    .command({
        command: 'get-student-courses',
        describe: 'Get student courses',
        builder: {
            id: {
                describe: 'Student id',
                type: 'number',
                demandOption: true
            }
        },
        handler(args) {
            studentController.getStudentCourses(args.id)
                .then(courses => {
                    console.log(courses);
                })
        }
    })
    .command({
        command: 'associate-student-course',
        describe: 'Associate student to course',
        builder: {
            studentId: {
                describe: 'Student id',
                type: 'number',
                demandOption: true
            },
            courseId: {
                describe: 'Course id',
                type: 'number',
                demandOption: true
            }
        },
        handler(args) {
            studentController.associateStudentToCourse(args.studentId, args.courseId)
                .then(() => {
                    console.log('Student associated to course');
                })
        }
    })
    .parse()