import React from 'react';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader'
import Popup from 'reactjs-popup'

import StudentDivider from "./StudentDivider"
import TPL from "./TeachersPriorityList"


class App extends React.Component {
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

        
        
        const otsikot = <tr><th>Huone</th><th>Valvoja</th><th>Luokka</th><th>Opiskelija</th><th>Kurssi</th><th>Opettaja</th><th>Tenttityyppi</th><th>Tentin lisätiedot</th><th>Kampus</th></tr>

        var rivit = this.state.sampleData.map((a, index) => {
            return <tr key={index}><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>
        })
        // <tr><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>

        return (
        <div className="container-fluid text-center text-md-left">
                <div className="row mx-auto">
                    <div className="col-lg" id="CSV-file-table">
                        <CSVReader
                            label="Select CSV file"
                            onFileLoaded={this.handleFile}
                        />
                        <br/>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                {otsikot}
                            </thead>
                            <tbody>
                                {rivit}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-lg" id="students-table">
                        <StudentDivider data={this.state.sampleData.slice(0, this.state.sampleData.length-1)} headers={this.state.headers}/>
                    </div>
                    <div className="col-lg">
                        <div id="teacherPriorityList">
                            <TPL />
                        </div>
                    </div>
                </div>
                <Popup trigger={<button> Muokkaa</button>} position="left-center">
                    <div>
                        <div className="header">Muokkaa tietoja :==()</div>
                        <form>
                            <ul>
                                <li>
                                    <label>Huone : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Valvoja : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Luokka : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Opiskelija : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Kurssi : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Opettaja : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Tenttityyppi : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Tentin Lisätiedot : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                                <li>
                                    <label>Kampus : </label>
                                    <input type="text" name="Huone"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </Popup>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))