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
        defaultValue: true,
        length: 500,
    },
    picture: {
        type: Sequelize.STRING,
        defaultValue: true,
        allowNull: false
    },
    comments_id: {
        type: Sequelize.STRING,
        defaultValue: true,
        allowNull: false
     }
})

module.exports = Post;