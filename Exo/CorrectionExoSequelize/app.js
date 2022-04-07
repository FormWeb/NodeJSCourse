const db = require('./models/db');

db.sequelize.sync()
    .then(() => {
        require("./yargs/student-yargs")
        require("./yargs/professor-yargs")
    })
