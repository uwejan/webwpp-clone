const express = require('express');
const server = new express();
const db = require('./database')

server.use(express.static("src"))

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(3000);