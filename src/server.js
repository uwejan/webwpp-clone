const express = require('express');
const server = new express();
//const db = require('./database')

server.use(express.static(__dirname))

server.get('/', (req, res) => {
    res.render("index.html");
})

//function save(){
//    var mensagem = document.getElementById('chat').value;
//    db.run(function(){
//        ('INSERT INTO places (message) VALUES (?)',[mensagem]);
//    });

//    console.log(mensagem)
//}

server.listen(process.env.PORT || 3000);