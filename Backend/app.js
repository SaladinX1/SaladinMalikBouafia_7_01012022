const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/User');
const postRoutes = require('./routes/Post');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//app.use(cookieParser());


app.use('images', express.static(path.join(__dirname, '/images')));


app.use('/auth/', userRoutes);

app.use('/posts/', postRoutes);




module.exports = app;