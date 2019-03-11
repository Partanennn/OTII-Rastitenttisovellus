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
    
    render() {

        // Gets data from this.state.data, where all teachers from database should be
        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{a["priority"]}</td><td>{a["name"]}</td><td>{a["email"]}</td></tr>
        })

        return(
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Prioriteetti</th>
                            <th>Nimi</th>
                            <th>Sposti</th>
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