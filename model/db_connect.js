const options = require("../config/db")
const mysql = require('mysql');
const util = require('util');


const connexion = mysql.createConnection(options);
connexion.query = util.promisify(connexion.query);


connexion.connect((err) => {
    if (err) throw err    
    console.log("La connexion à la base de données a réussi");
})


module.exports = connexion;