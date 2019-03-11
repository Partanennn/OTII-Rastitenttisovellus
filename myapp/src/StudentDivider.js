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

        const otsikot = this.state.headers.map((a, index) => {
            return <th key={index}>{a}</th>
        })

        const rivit = this.state.data.map((a, index) => {
            return <tr key={index}><td>{a[0]}</td><td>{a[1]}</td><td>{a[2]}</td><td>{a[3]}</td><td>{a[4]}</td><td>{a[5]}</td><td>{a[6]}</td><td>{a[7]}</td><td>{a[8]}</td></tr>
        })

        return(
            <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                {otsikot}
                            </tr>
                        </thead>
                        <tbody>
                            {rivit}
                        </tbody>
                        
                    </table>
        ) 
    }

}

export default StudentDivider