const Sequelize = require('sequelize');
const sequelize = require('../Database/db.script');
const User = require('./User')

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
    }
})

Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;