const express = require('express');
const server = express();

server.get("/", (req,res) => {
    return res.render("index.html")
})

server.listen(3000);