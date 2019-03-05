'use strict'
var mysql = require('mysql')

const CONN = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
})

module.exports = 
{
    fetchData: (req, res) => {
        CONN.query('SELECT * FROM data', (err, results, fields) => {
            if(err) {
                console.log("Virhe haettaessa dataa data-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log("Tiedot haettu onnistuneesti data-taulusta!!:)")
                res.status(200).json(results)
            }
        })
    },

    addData: (req, res) => {
        let v = req.body;

        CONN.query('INSERT INTO data (huone, valvoja, luokka, opiskelija, kurssi, opettaja, tenttityyppi, tentin_lisatiedot, kampus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [],
            (error, results, fields) => {
                if(error) {
                    console.log("Virhe lisättäessä dataa tietokantaan, syy: "+error.mysql)
                    res.json(error)
                } else {
                    console.log("Data lisätty onnistuneesti tietokantaan!:)")
                    res.statusCode = 201;
                }
        })
    }
}