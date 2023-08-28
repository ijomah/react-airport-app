import React from "react";

function ScrollPage(props) {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid white', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default ScrollPage   