import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TitleJumbotron from "./components/TitleJumbotron";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Imgitem from "./components/ImgItem";

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
    puppies: images,
    score: 0,
    highScore: 0,
    announcement: "Click on a puppy to begin!",
    toShakeOrNotToShake: "not-to-shake"
  };

  handleClick = id => {
    var imgArray = this.state.puppies;
    var foundIndex = imgArray.findIndex(x => x.id === id);
    // Check to see if this image has already been clicked
    if (imgArray[foundIndex].clicked === 1) {
      this.handleIncorrectGuess();
    } else {
      // Set the clicked element in the puppies array from 0 to 1      
      imgArray[foundIndex].clicked = 1;
      this.handleCorrectGuess(imgArray);
    };
  };

  handleCorrectGuess = (arr) => {
    // Update current score if it's less than high score, otherwise update both
    let currentScore = this.state.score;
    let newScore = currentScore + 1;
    let newHighScore;
    
    if (this.state.highScore < newScore) {
      // Update both
      newHighScore = newScore;
      let shuffledArray = shuffle(arr);
      this.setState({
      score: newScore,
      highScore: newHighScore,
      announcement: "You've guessed correctly!", 
      puppies: shuffledArray,
      toShakeOrNotToShake: "not-to-shake"
      });
    } else {
      // Update current score only
      let shuffledArray = shuffle(arr);
      this.setState({
      score: newScore, 
      announcement: "You've guessed correctly!", 
      puppies: shuffledArray,
      toShakeOrNotToShake: "not-to-shake"
      });
    };    
  };

  handleIncorrectGuess = () => {
    // Reset current score to 0, reset image array to it's initial state
    let resetArray = this.state.puppies;
    for (let i = 0; i < resetArray.length; i++) {
      resetArray[i].clicked = 0;
    };
    this.setState({
      score: 0, 
      puppies: resetArray, 
      announcement: "You've guessed incorrectly!",
      toShakeOrNotToShake: "shake"
    });
  };

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
          {this.state.puppies.map(img => (
            <Imgitem
              handleClick={this.handleClick}
              style={img.imgPath}
              key={img.id}
              id={img.id}
              name={img.clicked}
              shake={this.state.toShakeOrNotToShake}
             />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;
