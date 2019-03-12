import React from "react"


class StudentDivider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            data: nextProps.data
        })
    }

    render() {

        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>A-2069</td><td>Kekke Opettaja</td><td>{a[3]}</td><td>{a[4]}</td></tr>
        })

        return(
            <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr><th>Tila</th><th>Valvoja</th><th>Opiskelija</th><th>Kurssi</th></tr>
                        </thead>
                        <tbody>
                            {rivit}
                        </tbody>
                        
                    </table>
        ) 
    }

}

export default StudentDivider