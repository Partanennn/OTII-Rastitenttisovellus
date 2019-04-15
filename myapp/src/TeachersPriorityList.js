import React from "react"
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
            
        }
        this.handleMuokkaaClick = this.handleMuokkaaClick.bind(this)
        this.handleMuokkaaSave = this.handleMuokkaaSave.bind(this)
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/Teachers')
            .then(res => {
                this.setState({ data: res.data })
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

    handlePrio(a) {
        let prioriteetti = a["priority"]
        let id = a["id"];

        

        let temp = this.state.data
        this.state.data.forEach((item, index) => {
            if(item.id === a["id"]) {
                temp[index].priority--
                let temp2 = temp[index].priority
                if (temp[index].priority < 1) {
                    temp[index].priority = 1
                    temp2 = 1
                }
                axios.put("http://localhost:3001/TeacherPri/"+id, {priority: temp2})
                this.setState({ data: temp })
            }
        })
    }

    handlePrioDown(a) {
        
        let prioriteetti = a["priority"]
        let id = a["id"];

        let temp = this.state.data
        
        this.state.data.forEach((item, index) => {
            if(item.id === a["id"]) {
                temp[index].priority++
                let temp2 = temp[index].priority
                if (temp[index].priority > 10) {
                    temp[index].priority = 10
                    temp2 = 10
                }
                axios.put("http://localhost:3001/TeacherPri/"+id, {priority: temp2})
                this.setState({ data: temp })
            }
        })
    }
    // Puts currently row information into sessionStorage so JQuery can access it
    handleMuokkaaClick(a) {
        sessionStorage["id"] = a["id"];
        document.getElementById("teacherEditName").value = a["name"]
        document.getElementById("teacherEditEmail").value = a["email"]
        document.getElementById("teacherEditPriority").value = a["priority"]
    }

    handleMuokkaaSave() {
        axios.put("http://localhost:3001/Teachers/" + sessionStorage["id"], {
        name: document.getElementById("teacherEditName").value, 
        email: document.getElementById("teacherEditEmail").value, 
        priority: document.getElementById("teacherEditPriority").value})
        .then((res) => {
            if (res.status == 204) {
                alert("Opettajan tiedot päivitetty onnistuneesti!")
                document.location.reload()
            }
        }) 
        
    }

    render() {

        // Gets data from this.state.data, where all teachers from database should be
        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}>
            <td>{a["priority"]}</td>
            <td>{a["name"]}</td>
            <td id="eMail">{a["email"]}</td>
            <td><a id="teacherContact" href="#" onClick={() => {this.handleTeacherContactClick(a)}}>Copy to clipboard</a></td>
            <td><button type="button" className="teacherPrioUPBtn" onClick={() => {this.handlePrio(a)}}>/\</button></td>
            <td><button type="button" className="teacherPrioDOWNBtn" onClick={() => {this.handlePrioDown(a)}}>\/</button></td>
            <td><button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal" onClick={() => { this.handleMuokkaaClick(a) } }>Muokkaa</button></td></tr>
        })

        return(
            <div>
                <button type="button" onClick={() => this.props.func(this.state.data)} className="btn btn-success" id="TeacherSelectorBtn">Valitse opettajat</button>
                <button type="button" id="addTeacher" className="btn btn-success mx-3">Lisää opettaja</button>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal">Muokkaa</button>

                
                <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                
                
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Muokkaa opettajan tietoja</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label>Nimi:</label>
                            <input type="text" id="teacherEditName" className="form-control"></input>
                            <label>Email:</label>
                            <input type="text" id="teacherEditEmail" className="form-control"></input>
                            <label>Prioriteetti:</label>
                            <input type="text" id="teacherEditPriority" className="form-control"></input>
                        </form>
                        <button type="button" className="btn btn-success my-2" id="teacherEditSave" onClick={this.handleMuokkaaSave}>Tallenna</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                    
                </div>
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