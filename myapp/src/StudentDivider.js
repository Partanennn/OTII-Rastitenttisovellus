import React from "react"
import axios from "axios";


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            atkKurssit: [],
            data2: [],
            classrooms: [],
            atkClassrooms: [],
            rows: [],
            rows2: [],
            teachers: []
        }
        this.handleStudentDividerClick = this.handleStudentDividerClick.bind(this)
        this.handleClassroomAdd = this.handleClassroomAdd.bind(this)
    }

    componentDidMount() {
        
        fetch("http://localhost:3001/classrooms")
            .then(results => results.json())
            .then(jsonData => {
                var atkLuokat = []
                
                // Lisää atk luokat atkLuokat tauluun
                for(var i = 0; i < jsonData.length; i++) {
                    if(jsonData[i].atk) {
                        atkLuokat.push(jsonData[i])
                    }
                }

                // Poistaa atk luokat jsonDatasta
                for(var i = 0; i < jsonData.length; i++) {
                    if(jsonData[i].atk) {
                        jsonData.splice(i, 1)
                        i--
                    }
                }
                
                this.setState({ classrooms: jsonData, atkClassrooms: atkLuokat })
                //console.log(jsonData)
            })
        
        fetch("http://localhost:3001/courses")
            .then(results => results.json())
            .then(jsonData => {
                var atkKurssit1 = []

                for(var i = 0; i < jsonData.length; i++) {
                    if(jsonData[i].atk)
                        atkKurssit1.push(jsonData[i])
                }
                this.setState({ atkKurssit: atkKurssit1 })
                //console.log(this.state.atkKurssit)
            })
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ 
            data: nextProps.data,
            data2: nextProps.data,
            teachers: nextProps.teachers
        })
    }
    

    handleStudentDividerClick() {
        //console.log(this.state.atkKurssilaiset)
        // Counter is the variable that which classroom student is in
        var counter = 0;
        var opiskelijaLkm = 0;
        var opiskelijaLkmATK = 0;
        var atkCounter = 0;
        var teacherCounter = 0;
        var atkClassroomKoko = this.state.atkClassrooms[0].koko
        var classroomKoko = this.state.classrooms[0].koko;
        var opiskelijat = []
        
        var atkNortit = []
        // Jakaa oppilaat atkkurssilaisiin ja ei atkkurssilaisiin
        this.state.data.forEach((item, index) => {
            let on = false
            this.state.atkKurssit.forEach((kurssi) => {
                let counter = 0
                if(item[4] == kurssi.nimi) {
                    atkNortit.push(item)
                    on = true
                }
            })
            if(!on)
                opiskelijat.push(item)
        })
        //console.log(atkNörtit)
        //console.log(opiskelijat)
        // Jakaa atk opiskelijat atk luokkiin
        var rivit2 = atkNortit.map((item, index) => {
            opiskelijaLkm++;
            //console.log(this.state.atkClassrooms)
            if(atkClassroomKoko <= 0) {
                atkCounter++
                teacherCounter++
                atkClassroomKoko = this.state.atkClassrooms[atkCounter].koko
            }
            atkClassroomKoko--;
            
            return <tr key={index}><td>{this.state.atkClassrooms[atkCounter].nimi}</td><td>{this.state.teachers[counter] != null ? this.state.teachers[teacherCounter].name : "Ei opettajaa"}</td><td>{item[3]}</td><td>{item[4]}</td></tr>
        })  
        teacherCounter++
        // Jakaa ei atk luokkaa tarvitsevat oppilaat ei atk luokkiin
        var rivit = opiskelijat.map((item, index) => {
            opiskelijaLkm++;
            if(classroomKoko <= 0) {
                counter++
                teacherCounter++
                classroomKoko = this.state.classrooms[counter].koko
            }
            classroomKoko--;

            return <tr key={index}><td>{this.state.classrooms[counter].nimi}</td><td>{this.state.teachers[counter] != null ? this.state.teachers[teacherCounter].name : "Ei opettajaa"}</td><td>{item[3]}</td><td>{item[4]}</td></tr>
        })

        //console.log(this.state.atkKurssilaiset)
        this.setState({rows: rivit, rows2: rivit2})
    }

    handleClassroomAdd() {
        var nimi = document.getElementById("classroomAddNimi").value
        var koko = document.getElementById("classroomAddkoko").value
        var atk = document.getElementById("classroomAddAtk12").value
        console.log(atk)
    }

    render() {

        return(
            <div>
                <button type="button" onClick={this.handleStudentDividerClick} className="btn btn-success" id="StudentDividerButton">Jaa oppilaat</button>
                <button type="button" className="btn btn-success mx-1" id="StudentSaveBtn" data-toggle="modal" data-target="#saveExamModal">Tallenna tentti</button>
                <button type="button" className="btn btn-success" id="addClassRoomBtn" data-toggle="modal" data-target="#editClassroomModal">Hallitse luokkia</button>
                
                <div className="modal fade" id="editClassroomModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Lisää luokka</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                        <div className="modal-body">
                            <form>
                                <label>Nimi:</label>
                                <input type="text" id="classroomAddNimi" className="form-control"></input>
                                <label>koko:</label>
                                <input type="text" id="classroomAddkoko" className="form-control" onKeyPress={() => this.validate()}></input>
                                <label>Valitse jos atk:</label>
                                <input type="checkbox" id="classroomAddAtk12" className="form-control"></input>
                            </form>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" id="examSave" onClick={this.handleClassroomAdd}>Tallenna</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr><th>Tila</th><th>Valvoja</th><th>Opiskelija</th><th>Kurssi</th></tr>
                    </thead>
                    <tbody>
                        {this.state.rows}
                        {this.state.rows2}
                    </tbody>
                    
                </table>
            </div>
        ) 
    }

}

export default StudentDivider