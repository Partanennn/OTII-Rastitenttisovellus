import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
            
        }
        this.handleMuokkaa = this.handleMuokkaa.bind(this)
    }
    
    componentDidMount() {
        fetch("http://localhost:3001/Teachers")
            .then(results => results.json())
            .then(jsonData => {
                this.setState({ data: jsonData })
            })
    }


    handleTeacherContactClick(a) {
        const el = document.createElement('textarea')
        el.value = "Moro " + a.name + ", olet rästitentin valvontavuorossa. Pääsetkö paikalle?";
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        alert("Copied \n" + "'" +el.value +"'"+ "\n to clipboard")
        document.body.removeChild(el)    
    }

    // Puts currently row information into sessionStorage so JQuery can access it
    handleMuokkaa(a) {
        sessionStorage["id"] = a["id"];
        document.getElementById("teacherEditName").value = a["name"]
        document.getElementById("teacherEditEmail").value = a["email"]
        document.getElementById("teacherEditPriority").value = a["priority"]
    }

    render() {

        // Gets data from this.state.data, where all teachers from database should be
        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{a["priority"]}</td><td>{a["name"]}</td><td id="eMail">{a["email"]}</td><td><a id="teacherContact" href="#" onClick={() => {this.handleTeacherContactClick(a)}}>Copy to clipboard</a></td><td><input type="checkbox" id="teacherCheckBox"></input></td><td><button type="button" a={index} className="teacherEditButton" onClick={() => { this.handleMuokkaa(a) } }>Muokkaa</button></td></tr>
        })

        return(
            <div>
                <button type="button" onClick={() => this.props.func(this.state.data)} className="btn btn-success" id="TeacherSelectorBtn">Valitse opettajat</button>
                <button type="button" id="addTeacher" className="btn btn-success mx-3">Lisää opettaja</button>
                <div id="teacherDialog">
                    <form id="teacherAddForm">
                        <input type="text" placeholder="Nimi" name="name"/>
                        <input type="text" placeholder="Email" name="email"/>
                    </form>
                </div>
                <div id="teacherEditDialog">
                    <form id="teacherEditForm">
                        <input id="teacherEditPriority" type="text" name="priority"/>
                        <input id="teacherEditName" type="text" name="name" />
                        <input id="teacherEditEmail" type="text" name="email" />
                    </form>
                </div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Prioriteetti</th>
                            <th>Nimi</th>
                            <th>Sposti</th>
                            <th></th>
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