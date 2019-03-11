import React from "react"
import CSVReader from "react-csv-reader"

class CSVParser extends React.Component {
    constructor() {
        super()
        this.state = {
            sampleData: [],
            headers: []
        }
        this.handleFile = this.handleFile.bind(this)
    }

    // Handles data of csv and adds first row of csv file to this.state.headers, adds other rows to this.state.sampledata
    handleFile(data) {
        const actualData = data.slice(1)
        this.setState({
            sampleData: actualData,
            headers: data[0]
        });
        // console.log(actualData)
    }

    render() {
        // Handles table classes, if table is empty then it doesnt have any classes and does show nothing in browser
        let luokat = "";

        if(this.state.headers.length !== 0)
            luokat = "table table-striped"

        const otsikot = this.state.headers.map((a, index) => {
            return <th key={index}>{a}</th>
        })

        var rivit = this.state.sampleData.map((a, index) => {
            return <tr key={index}><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>
        })
        // <tr><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>

        console.log(this.state.sampleData[0])
        return (
            <div>
                <CSVReader
                    label="Select CSV file"
                    onFileLoaded={this.handleFile}
                />
                <br/>
                <table className={luokat}>
                    <thead className="thead-dark">
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

export default CSVParser