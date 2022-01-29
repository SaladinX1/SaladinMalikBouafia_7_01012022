const Sequelize = require('sequelize');
const sequelize = require('../Database/db.config');


const Post = sequelize.define('Post', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 500,
    },
    picture: {
        type: Sequelize.STRING,
    }
})

module.exports = Post;