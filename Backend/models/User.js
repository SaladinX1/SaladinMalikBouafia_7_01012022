const Sequelize = require('sequelize');
const sequelize = require('../Database/db.config');


const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pseudo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {

        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pictureUrl: {

        type: Sequelize.STRING,
        allowNull: true
    }
    // Other model options go here
});

module.exports = User;