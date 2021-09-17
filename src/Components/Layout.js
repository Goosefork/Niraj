import React from 'react';

function Layout(props) {
    return (
        <div>
            <div className="mainContainer">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
