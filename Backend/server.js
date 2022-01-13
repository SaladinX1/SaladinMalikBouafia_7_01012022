const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const http = require('http');
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

server.listen(process.env.PORT || 3000);

app.get('/health', function (req, res) {

    res.send('The api is working properly');
});