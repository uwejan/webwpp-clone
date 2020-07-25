const sqlite = require("sqlite3").verbose()
const db = new sqlite.Database("./src/database.db")

module.exports = db;

// db.serialize(() => {

//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            message TEXT
//        );
//    `)
   
//   const query = `
//        INSERT INTO places (
//            message
//        ) VALUES (
//            ?
//        );
//    `
 
//    const values = [
//        "mensagem"
//    ]
 
//    function afterInsertData (err){
//        if (err) {
//            return console.log(err)
//         }

//   }
 
//    db.run(query, values, afterInsertData);
//})

//db.run(query, values, afterInsertData)

// db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
//        if (err) {
//            return console.log(err)
//        }
//       console.log("Registro deletado")  
//  })

// db.serialize()
