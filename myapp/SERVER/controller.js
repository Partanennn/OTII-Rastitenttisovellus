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
    // Fetches all data about students
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

    // Fetches all teachers
    fetchTeachers: (req, res) => {
        CONN.query('SELECT * FROM teacher', (err, results, fields) => {
            if(err) {
                console.log("Virhe haettaessa dataa teacher-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log("Tiedot haettu onnistuneesti teacher-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Fetches all courses from database
    fetchCourses: (req, res) => {
        CONN.query('SELECT * FROM courses', (err, results, fields) => {
            if(err) {
                console.log("Virhe haettaessa dataa courses-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log("Tiedot haettu onnistuneesti courses-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Fetchers all classrooms
    fetchClassrooms: (req, res) => {
        CONN.query('SELECT * FROM classroom', (err, results, fields) => {
            if(err) {
                console.log("Virhe haettaessa dataa classroom-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log("Tiedot haettu onnistuneesti classroom-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Adds teacher to table
    addTeacher: (req, res) => {
        let v = req.body;

        CONN.query('INSERT INTO teacher (name, email) VALUES (?, ?)', [v.name, v.email], 
            (error, results, fields) => {
                if(error) {
                    console.log("Virhe lisättäessä dataa tietokantaan, syy: "+error.mysql)
                    res.json(error)
                } else {
                    console.log("Data lisätty onnistuneesti tietokantaan!:)")
                    res.statusCode = 201;
                }
            }) 
    },

    // Adds data to data-table
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