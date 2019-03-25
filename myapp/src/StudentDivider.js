import React from "react"


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            classrooms: [],
            rows: []
        }
        this.handleStudentDividerClick = this.handleStudentDividerClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            data: nextProps.data
        })
        console.log(nextProps.data)
    }

    componentDidMount() {
        fetch("http://localhost:3001/classrooms")
            .then(results => results.json())
            .then(data => {
                this.setState({ classrooms: data })
            })
        //this.setState({ classrooms:  })
    }

    handleStudentDividerClick() {
        var counter = 0;
        var opiskelijaLkm= 0;
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