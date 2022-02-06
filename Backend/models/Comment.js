const Sequelize = require('sequelize');
const sequelize = require('../Database/db.config');


const Comments = sequelize.define(`Comments`, {

    Id: {
        type: Sequelize.NUMBER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Pseudo: {
        type: Sequelize.STRING,
        defaultValue: true,
        length: 500
    },
    message: {
        type: Sequelize.STRING,
        defaultValue: true

    },
    timestamp: {
        type: Sequelize.NUMBER
    }

})

module.exports = Comments;