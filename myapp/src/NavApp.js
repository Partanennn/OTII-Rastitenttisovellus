import React from "react"


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

export default NavApp