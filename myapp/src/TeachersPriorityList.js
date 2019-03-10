import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {

    }
    
    render() {

        

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Prioriteetti</th>
                            <th>Nimi</th>
                            <th>Sposti</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default App