import React from "react";

var style = {
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    padding: "20px",
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflow: "auto"
}

function Wrapper(props) {
  return <div className="wrapper" style={style}>{props.children}</div>;
}

export default Wrapper;