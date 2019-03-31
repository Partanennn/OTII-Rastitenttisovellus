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
class Example extends React.Component {
    constructor() {
      super();
      this.state = { user: {} };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch('/users', { 
          method: 'POST',
          data: {
            name: self.refs.name,
            job: self.refs.job
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
    }
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name"/>
          <input type="text" placeholder="Job" ref="job"/>
          <input type="submit" />
        </form>
      );
    }
  }
export default Example
export default App