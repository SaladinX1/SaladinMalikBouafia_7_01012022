
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

initialize();

async function initialize() {

    // create db if it doesn't already exist
    const host = 'localhost';
    const port = 3306;
    const user = 'root';
    const database = 'saladin_groupomania';
    const password = 'Paradise01*'

    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

    // connect to db

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });
    // sync all models with database


    await sequelize.sync().then( res => {
      console.log('Connexion réussi à la base de données !')
    }).catch(err => console.log('Connexion échoué !', err))
}

module.exports = db = {};
