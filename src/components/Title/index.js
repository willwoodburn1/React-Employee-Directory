import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="header">
            <h1 className="title">{props.children}</h1>
            <h6> View all employees below or filter through to find specific employees</h6>
        </div>
    )
}

export default Title;
