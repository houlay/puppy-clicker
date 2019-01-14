import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TitleJumbotron from "./components/TitleJumbotron";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Imgitem from "./components/ImgItem";

const initialImgState = images;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
  state = {
    puppies: initialImgState,
    score: 0,
    highScore: 0,
    announcement: "Click on a puppy to begin!"
  };

  handleClick = id => {
    console.log(id)
    var imgArray = this.state.puppies;
    var foundIndex = imgArray.findIndex(x => x.id === id);

    if (imgArray[foundIndex].clicked === 1) {
      this.handleIncorrectGuess();
    } else {
      imgArray[foundIndex].clicked = 1;
      this.setState({ puppies: imgArray});
      this.handleCorrectGuess();
    };
  };

  handleCorrectGuess = () => {
    // Update current score if it's less than high score, otherwise update both
    if (this.state.score <= this.state.highScore) {
      let currentScore = this.state.score;
      let newScore = currentScore ++;
      console.log(this.state.score, currentScore, newScore);
      this.setState({score: newScore, announcement: "You've guessed correctly!"});
    } else {
      let currentScore = this.state.score;
      let newScore = currentScore ++;
      this.setState({score: newScore, highScore: newScore, announcement: "You've guessed correctly!"});
    }
  }

  handleIncorrectGuess = () => {
    // Reset current score to 0, reset image array to it's initial state
    console.log("wrong guess")
    this.setState({score: 0, puppies: initialImgState, announcement: "You've guessed incorrectly!"});
  }

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          announcement={this.state.announcement}
        />
        <TitleJumbotron />
        <Wrapper>
          {shuffle(this.state.puppies).map(img => (
            <Imgitem
              handleClick={this.handleClick}
              style={img.imgPath}
              key={img.id}
              id={img.id}
              name={img.clicked}
             />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
