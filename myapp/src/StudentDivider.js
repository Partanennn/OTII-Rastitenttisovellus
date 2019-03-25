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
        var rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{this.state.classrooms[0].nimi}</td><td>Sukunimi Etunimi</td><td>{a[3]}</td><td>{a[4]}</td></tr>
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