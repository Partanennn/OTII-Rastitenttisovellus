import React from "react"
import CSVReader from "react-csv-reader"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            sampleData: [''],
            headers: ['']
        }
        this.handleFile = this.handleFile.bind(this)
    }

    handleFile(data) {
        const actualData = data.slice(1)
        this.setState({
            sampleData: actualData,
            headers: data[0]
        });
        // console.log(actualData)
    }

    render() {
        const otsikot = this.state.headers.map(a => {
            return <th>{a}</th>
        })

        var rivit = this.state.sampleData.map(a => {
            return <tr><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>
        })
        // <tr><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>


        return (
            <div>
                <CSVReader
                    label="Select CSV file"
                    onFileLoaded={this.handleFile}
                />
                <br/>
                <p>Length: {this.state.sampleData[0].length}</p>
                <table>
                    <thead>
                        <tr>{otsikot}</tr>
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