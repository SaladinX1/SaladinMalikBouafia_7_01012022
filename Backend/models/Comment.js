const Sequelize = require('sequelize');
const sequelize = require('../Database/db.config');
const User = require('../models/User')
const Posts = require('../models/Post');


const Comments = sequelize.define('Comments', {

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
    }

});

User.hasMany(Comments);
Comments.belongsTo(User);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);


module.exports = Comments;