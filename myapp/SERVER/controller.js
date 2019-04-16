'use strict'
var mysql = require('mysql')

const CONN = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
})

function getDate() {
    var day = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()

    var seconds = new Date().getSeconds()
    var minutes = new Date().getMinutes()
    var hours = new Date().getHours()
    return "[" + day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds + "] ";
}

module.exports = 
{
    // Fetches all data about students
    fetchData: (req, res) => {
        CONN.query('SELECT * FROM data', (err, results, fields) => {
            if(err) {
                console.log(getDate() + "Virhe haettaessa dataa data-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log(getDate() + "Tiedot haettu onnistuneesti data-taulusta!!:)")
                res.status(200).json(results)
            }
        })
    },

    // Fetches all teachers
    fetchTeachers: (req, res) => {
        CONN.query('SELECT * FROM teacher ORDER BY priority ASC', (err, results, fields) => {
            if(err) {
                console.log(getDate() + "Virhe haettaessa dataa teacher-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log(getDate() + "Tiedot haettu onnistuneesti teacher-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Fetches all courses from database
    fetchCourses: (req, res) => {
        CONN.query('SELECT * FROM courses', (err, results, fields) => {
            if(err) {
                console.log(getDate() + "Virhe haettaessa dataa courses-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log(getDate() + "Tiedot haettu onnistuneesti courses-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Fetchers all classrooms
    fetchClassrooms: (req, res) => {
        CONN.query('SELECT * FROM classroom', (err, results, fields) => {
            if(err) {
                console.log(getDate() + "Virhe haettaessa dataa classroom-taulusta, syy: "+err)
                res.status(500).json({'status': 'not ok', 'status_text': err.sqlMessage})
            } else {
                console.log(getDate() + "Tiedot haettu onnistuneesti classroom-taulusta!:)")
                res.status(200).json(results)
            }
        })
    },

    // Adds teacher to table
    addTeacher: (req, res) => {
        let v = req.body;
        console.log(v)
        CONN.query('INSERT INTO teacher (name, email) VALUES (?, ?)', [v.name, v.email], 
            (error, results, fields) => {
                if(error) {
                    console.log(getDate() + "Virhe lisättäessä dataa tietokantaan, syy: "+error)
                    res.json(error)
                } else {
                    console.log(getDate() + "Data lisätty onnistuneesti tietokantaan!:)")
                    res.statusCode = 201;
                }
            }) 
    },

    addExam: (req, res) => {
        let v = req.body
        console.log(v)
        CONN.query('INSERT INTO exam (tila, valvoja, opiskelija, kurssi, date) VALUES (?, ?, ?, ?, ?)', [v.tila, v.valvoja, v.opiskelija, v.kurssi, v.date], 
            (error, results, fields) => {
                if(error) {
                    console.log(getDate() + "Virhe lisättäessä tenttiä tietokantaan, syy: "+error)
                    res.json(error)
                } else {
                    console.log(getDate() + "Tentti lisätty onnistuneesti tietokantaan!:)")
                    res.statusCode = 201;
                }
            }) 
    },

    // Delete teacher
    deleteTeacher: (req, res) => {
        let key = req.params.id;
        CONN.query('DELETE FROM teacher WHERE id=?', [key], 
            (err, result, fields) => {
                if(err) {
                    console.log(getDate() + "Virhe muutettaessa opettaja taulun dataa, syy: "+err);
                    res.status(500).json({ error: 'something is wrong' });
                } else {
                    console.log(getDate() + "Onnistuneesti poistettu opettaja teacher pöydässä::)");
                    res.statusCode = 200;
                    res.send();
                }
            })
    },

    // Edit teacher
    editTeacher: (req, res) => {
        let v = req.body;
        let key = req.params.id;
        console.log(JSON.stringify(v));
        CONN.query('UPDATE teacher SET name=?, priority=?, email=? WHERE id=?', [v.name, v.priority, v.email, key], 
            (err, result, fields) => {
                if(err) {
                    console.log(getDate() + "Virhe muutettaessa opettaja taulun dataa, syy: "+err);
                    res.json(err);
                } else {
                    console.log(getDate() + "Onnistuneesti päivitetty dataa teacher pöydässä::)");
                    res.statusCode = 204;
                    res.send();
                }
            })
    },

    changePriority: (req ,res) => {
        let v = req.body;
        let key = req.params.id;
        console.log(JSON.stringify(v) + " ::::: id="+key)
        CONN.query('UPDATE teacher SET priority=? WHERE id=?', [v.priority, key],
            (err, results, fields) => {
                if(err) {
                    console.log(getDate() + "Virhe muutettaessa opettajan prioriteettia, syy: "+err)
                    res.json(err)
                } else {
                    console.log(getDate() + "Onnistuneesti päivitetty opettajan prioriteettia::=)")
                    res.statusCode = 204
                    res.send();
                }
            })
    },
    // Adds data to data-table
    addData: (req, res) => {
        let v = req.body;

        CONN.query('INSERT INTO data (huone, valvoja, luokka, opiskelija, kurssi, opettaja, tenttityyppi, tentin_lisatiedot, kampus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [],
            (error, results, fields) => {
                if(error) {
                    console.log(getDate() + "Virhe lisättäessä dataa tietokantaan, syy: "+error.mysql)
                    res.json(error)
                } else {
                    console.log(getDate() + "Data lisätty onnistuneesti tietokantaan!:)")
                    res.statusCode = 201;
                }
        })
    }   
}