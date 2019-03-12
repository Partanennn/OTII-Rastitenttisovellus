import React from "react"


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            headers: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            data: nextProps.data, 
            headers: nextProps.headers
        })
    }

    render() {

        const otsikot = <tr><th>Luokka</th><th>Oppilas</th></tr>

        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{a[3]}</td><td>{a[4]}</td></tr>
        })

        return(
            <table className="table table-striped">
                        <thead className="thead-dark">
                            {otsikot}
                        </thead>
                        <tbody>
                            {rivit}
                        </tbody>
                        
                    </table>
        ) 
    }

}

export default StudentDivider