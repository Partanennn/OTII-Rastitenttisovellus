import React from "react"
import { timingSafeEqual } from "crypto";


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            atkKurssit: [],
            atkKurssilaiset: [],
            classrooms: [],
            rows: [],
            teachers: []
        }
        this.handleStudentDividerClick = this.handleStudentDividerClick.bind(this)
        this.testHandle = this.testHandle.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:3001/classrooms")
            .then(results => results.json())
            .then(jsonData => {
                this.setState({ classrooms: jsonData })
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

        /*var joo = nextProps.data.map((a, index) => {
            return (this.state.atkKurssit.map((b, index) => {
                if(a[4] == b.nimi) {
                    return a;
                }
            }))
        })
        */
        // Prints out 3rd student 
        // console.log(joo[2][0])
        var temp = []
        nextProps.data.map((item, index) => {
            for(var i = 0; i < this.state.atkKurssit.length; i++) {
                if(item[4] == this.state.atkKurssit[i]["nimi"]) {
                    temp.push(item)
                }
            }
        })
        this.setState({ 
            data: nextProps.data,
            atkKurssilaiset: temp,
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
        var classroomKoko = this.state.classrooms[0].koko;

        var rivit = this.state.data.map((item, index) => {
            opiskelijaLkm++;
            classroomKoko--;
            if(classroomKoko <= 0) {
                counter++
                teacherCounter++
                classroomKoko = this.state.classrooms[counter].koko
            }
            
            // Jos tyypin kurssi on atk kurssi niin return atkkurssi 
            //this.state.

            return <tr key={index}><td>{this.state.classrooms[counter].nimi}</td><td>{this.state.teachers[counter] != null ? this.state.teachers[teacherCounter].name : "Ei opettajaa"}</td><td>{item[3]}</td><td>{item[4]}</td></tr>
        })
        
        //console.log(this.state.atkKurssilaiset)
        this.setState({rows: rivit})
    }

    testHandle() {
        
    }

    render() {

        return(
            <div>
                <button type="button" onClick={this.handleStudentDividerClick} className="btn btn-success" id="StudentDividerButton">Jaa oppilaat</button>
                
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr><th>Tila</th><th>Valvoja</th><th>Opiskelija</th><th>Kurssi</th></tr>
                    </thead>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                    
                </table>
            </div>
        ) 
    }

}

export default StudentDivider