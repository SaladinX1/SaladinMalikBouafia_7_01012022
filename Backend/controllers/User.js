const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Database/database');
const userModel = require('../models/User');

const timeLimit = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.SECRET_TOKEN, {
        expiresIn: timeLimit
    })
}


exports.signUp = async (req, res, next) => {

    const {
        pseudo,
        email,
        password
    } = req.body

    try {
        const user = await userModel.create({
            pseudo,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        const pwd = await bcrypt.hash(req.body.password, salt);
        res.status(201).json({
            user: user._id
        });
    } catch (err) {
        res.status(200).send({
            err
        })
    }



};

exports.signIn = (req, res, next) => {

    const {
        email,
        password
    } = req.body

    try {
        const user = await userModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            timeLimit
        })
        res.status(200).json({
            user: user._id
        })
    } catch (err) {
        res.status(200).json(err)

    }
}


exports.signOut = (req, res, next) => {

    res.cookie('jwt', '', {
        timeLimit: 1
    });
    res.redirect('/');

}