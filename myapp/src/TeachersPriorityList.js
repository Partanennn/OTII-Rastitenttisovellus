import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        fetch("http://localhost:3001/Teachers")
            .then(results => results.json())
            .then(jsonData => {
                this.setState({ data: jsonData })
            })
    }
    
    handleTeacherSelectorClick() {

    }

    handleTeacherContactClick() {
        



    }

    render() {

        // Gets data from this.state.data, where all teachers from database should be
        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{a["priority"]}</td><td>{a["name"]}</td><td>{a["email"]}</td><td><a id="teacherContact" href="" onClick={this.handleTeacherContactClick}>Copy to clipboard</a></td><td><input type="checkbox" id="teacherCheckBox"></input></td></tr>
        })

        return(
            <div>
                <button type="button" onClick={this.handleTeacherSelectorClick} className="btn btn-success" id="TeacherSelectorBtn">Select teachers</button>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Prioriteetti</th>
                            <th>Nimi</th>
                            <th>Sposti</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rivit}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App