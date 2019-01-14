import React from "react";

var jumboStyle = {
    position: "relative",
    width: "100%",
    height: "400px",
    padding: 0,
    fontFamily: "'Times New Roman', Times, serif",
}

var overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "auto",
    background: "black",
    opacity: 0.5
};

var bgStyle = {
    height: "100%",
    backgroundImage: "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/dHnxL5V/retro-80s-vhs-tape-video-game-intro-landscape-vector-arcade-wireframe-terrain-4k_bgfym6on__F0002.png)",
    backgroundSize: "cover"
};

var captionStyle = {
    position: "absolute",
    top: "40%",
    width: "100%",
    textAlign: "center",
    color: "white"
};

function TitleJumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={jumboStyle}>
                <div style={overlayStyle}>
                </div>
                <div style={bgStyle}>
                </div>
                <div style={captionStyle}>
                    <h1 className="display-4" style={{fontWeight: 800, fontSize: "100px"}}>Puppy Clicker</h1>
                    <p className="lead" style={{fontSize: "30px"}}>Click on a puppy to earn points, but don't click the puppy more than once!</p>
                </div>
            </div>
        </div>
    );
};

export default TitleJumbotron;