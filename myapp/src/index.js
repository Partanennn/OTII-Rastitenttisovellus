import React from 'react';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader'

import StudentDivider from "./StudentDivider"
import TPL from "./TeachersPriorityList"
import CSVParser from "./CsvParse"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
        <div className="container text-center text-md-left">
                <div className="row mx-auto">
                    <div className="col-lg" id="CSV-file-table">
                        <CSVParser />
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-lg" id="students-table">
                        <StudentDivider />
                    </div>
                    <div className="col-lg">
                        <button type="button" className="btn btn-success">Contact</button>
                        <div id="teacherPriorityList">
                            <TPL />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))