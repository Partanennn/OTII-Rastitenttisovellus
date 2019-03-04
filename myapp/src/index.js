import React from 'react';
import ReactDOM from 'react-dom';

import NavApp from "./NavApp"
import MyApp from "./MyApp"



function MainApp() {
    return (
        <div>
            <NavApp />
            <MyApp />
        </div>
    )
}




ReactDOM.render(<MainApp />, document.getElementById('root'));
