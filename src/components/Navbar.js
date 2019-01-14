import React from "react";

var style = {
    boxShadow: "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)", 
    position: "fixed", 
    minHeight: "70px", 
    zIndex: 99, 
    width: "100%",
    fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)"
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
            <ul className="navbar-nav" style={style}>
                <li className="nav-item">
                    <a className="navbar-brand" href="/" style={{fontSize: "30px"}}>Puppy Clicker</a>
                </li>
                <li className="navbar-item active" style={{float: "center", margin: "auto"}}>
                    <a className="nav-link" style={{fontSize: "20px"}}>{props.announcement} <span className="sr-only">(current)</span></a>
                </li>
                <li className="navbar-item" >
                    <a className="nav-link" style={{color: "white", fontSize: "20px"}}>Score: {props.score} | Top Score: {props.highScore}</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;