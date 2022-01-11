const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/User');
const cors = require('cors');
app.use(cors());


app.use('images', express.static(path.join(__dirname, '/images')));


app.use('/api/auth/', userRoutes);



module.exports = app;