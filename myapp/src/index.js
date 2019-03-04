import React from 'react';
import ReactDOM from 'react-dom';

function NavApp() {
    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-fixed-top">
            <a className="navbar-brand" href=""> <img src="savonia_logo.png" width="260" height="80"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="">Paska</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
function MyApp() {
    return (
        <div className="container text-center text-md-left">
            <div className="row mx-auto">
                <div className="col-lg">
                    <button type="button" className="btn btn-success">Upload CSV</button>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="col-lg">
                    <table>
                        <thead>
                            <tr>
                                <th>Luokka</th>
                                <th>Opiskelija</th>
                                <th>Kurssi</th>
                                <th>Opettaja</th>
                                <th>Tenttityyppi</th>
                                <th>Lisätiedot</th>
                                <th>Kampus</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ETA18SP</td>
                                <td>Tekulainen Jonne</td>
                                <td>KHP6969 Käsienheiluttelun perusteet</td>
                                <td>Teku Ope</td>
                                <td>Heiluttelu</td>
                                <td>Käsien</td>
                                <td>Kuopio</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="col-lg">
                <button type="button" className="btn btn-success">Divide students</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Tila</th>
                                <th>Valvoja</th>
                                <th>Opiskelija</th>
                                <th>Kurssi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A-2069</td>
                                <td>Make</td>
                                <td>Tekulainen Jonne</td>
                                <td>KHP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg">
                    <button type="button" className="btn btn-success">Contact</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Prio</th>
                                <th>Nimi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Make</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<NavApp />, document.getElementById('navroot'));
ReactDOM.render(<MyApp />, document.getElementById('root'));
