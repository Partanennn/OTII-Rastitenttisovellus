var express = require('express')
var controller = require('./controller')
var bodyParser = require('body-parser')
var app = express();
var port = 3001;

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use( bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(allowCrossDomain)

app.use(express.json())


// REST API

app.route("/allData")
    .get(controller.fetchData)

app.route("/Teachers")
    .get(controller.fetchTeachers)
    .post(controller.addTeacher)

app.route("/Teachers/:id")
    .put(controller.editTeacher)
    .delete(controller.deleteTeacher)

app.route("/TeacherPri/:id")
    .put(controller.changePriority)
    
app.route("/classrooms")
    .get(controller.fetchClassrooms)

app.route("/courses")
    .get(controller.fetchCourses)

app.route("/Exam")
    .post(controller.addExam)

app.listen(port, () => {
    console.log("Server is listening port "+port)
})