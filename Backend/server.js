const app = require('./app');
const cookieParser = require('cookie-parser');
const http = require('http');
const server = http.createServer(app);
const sequelize = require('./Database/db.config');




server.listen(process.env.PORT || 3000);

app.get('/health', function (req, res) {

    res.send('The api is working properly');
});


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

sequelize
    .sync()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })