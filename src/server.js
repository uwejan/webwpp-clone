const express = require('express');
const server = new express();
//const db = require('./database')

server.use(express.static(__dirname))

server.get('/', (req, res) => {
    res.render("index.html");
})

server.post("/savepoint", (req, res) => {
    var mensagem = document.getElementById('chat').value;

    'INSERT INTO places (message) VALUES (?)',[mensagem]);

    function afterInsertData (err){
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("index.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get("/search-results", (req,res) =>{
    const search = req.query.search

    if(search == "") {return res.render("search-results.html", {total: 0})}

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) { //pesquisa 'parecido' com search
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total})
    });
})

server.listen(process.env.PORT || 3000);