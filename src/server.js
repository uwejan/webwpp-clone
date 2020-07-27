const express = require('express');
const server = new express();
//const db = require('./database')

server.use(express.static(__dirname))

server.get('/', (req, res) => {
    res.render("index.html");
})

server.listen(process.env.PORT || 3000);