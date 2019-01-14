import React from "react";
import "./style.css";

function ImgItem(props) {    
    return (
        <div className="img-container"
        onClick={() => props.handleClick(props.id)}
        style={props.style}
        name={props.name}
        ></div>
    );
    
};

export default ImgItem;