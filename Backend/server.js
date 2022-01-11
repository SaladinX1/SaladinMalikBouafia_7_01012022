const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

server.listen(process.env.PORT || 3000);

app.get('/health', function (req, res) {

    res.send('The api is working properly');
});