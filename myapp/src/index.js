import React from 'react';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader'

import NavApp from "./NavApp"
import MyApp from "./MyApp"


function MainApp() {
    return (
        <div>
            <NavApp />
            <MyApp />
        </div>
    )
}

class CSVParser extends React.Component {
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
                <table className="table table-striped">
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


ReactDOM.render(<CSVParser />, document.getElementById('CSV-file-table'))
ReactDOM.render(<MainApp />, document.getElementById('root'));