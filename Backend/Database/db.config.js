const {
    Sequelize
} = require('sequelize');


const sequelize = new Sequelize('saladin_groupomania', 'root', 'Paradise01*', {
    host: 'localhost',
    dialect: 'mysql'
});

async function dbConn() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbConn();

module.exports = sequelize;
