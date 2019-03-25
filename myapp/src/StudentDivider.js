import React from "react"


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            atkKurssit: [],
            atkKurssilaiset: [],
            classrooms: [],
            rows: []
        }
        this.handleStudentDividerClick = this.handleStudentDividerClick.bind(this)
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
                this.setState({ atkKurssit: jsonData })
            })
    }

    componentWillReceiveProps(nextProps) {

        var joo = nextProps.data.map((a, index) => {
            return (this.state.atkKurssit.map((b, index) => {
                if(a[4] == b.nimi) {
                    return a;
                }
            }))
        })

        // Prints out 3rd student 
        // console.log(joo[2][0])

        this.setState({ 
            data: nextProps.data,
            atkKurssilaiset: joo
        })
    }

    handleStudentDividerClick() {
        console.log(this.state.atkKurssilaiset)
        // Counter is the variable that which classroom student is in
        var counter = 0;
        var opiskelijaLkm = 0;
        var opiskelijaLkmATK = 0;
        var atkCounter = 0;

        var rivit = this.state.data.map((item, index) => {
            opiskelijaLkm++;
            if(opiskelijaLkm > this.state.classrooms[counter].koko) {
                counter++
                opiskelijaLkm = 1;
            }

            return <tr key={index}><td>{this.state.classrooms[counter].nimi}</td><td>Etunimi Sukunimi</td><td>{item[3]}</td><td>{item[4]}</td></tr>
        })
        
        
        this.setState({rows: rivit})
    }

    render() {

        return(
            <div>
                <button type="button" onClick={this.handleStudentDividerClick} className="btn btn-success" id="StudentDividerButton">Divide students</button>
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