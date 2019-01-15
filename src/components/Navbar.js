import React from "react";
import { list } from "postcss";

var style = {
    boxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)", 
    position: "fixed", 
    minHeight: "70px", 
    zIndex: 99, 
    width: "100%",
    fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)"
}

var ulStyle = {
    margin: 0,
    padding: 0,
    width: "100%"
}

var listStyle = {
    display: "inline-block",
    padding: "25px 0",
    width: "33.3%",
    textAlign: "center",
    color: "white",
    fontSize: "20px"
}

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark" style={style}>
            {/* <a className="navbar-brand" href="/" style={{fontSize: "30px"}}>Clicky Game</a>                
            <div className="navbar-nav" style={{margin: "auto"}}>
                <div className="nav-item active">
                    <a className="nav-link active" style={{fontSize: "25px"}}>Click an image to begin! <span className="sr-only">(current)</span></a>
                </div>                                        
            </div>
            <div className="nav-item" style={{color: "white", fontSize: "25px"}}>
                <a className="nav-link">Score: 0 | Top Score: 0</a>
            </div> */}
            <ul style={ulStyle}>
                <li className="brand" style={listStyle}>
                    Puppy Clicker
                </li>
                <li style={listStyle}>
                    {props.announcement}
                </li>
                <li style={listStyle}>
                    Score: {props.score} | Top Score: {props.highScore}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;