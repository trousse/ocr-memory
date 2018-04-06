import React, { Component } from 'react'
import './App.css'
import Card from "./Card"
import GuessCount from "./GuessCount"
import shuffle from "lodash.shuffle";
import HallOfFame, { FAKE_HOF } from './HallOfFame';

export const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {

  clicked(card){
    console.log(card+",has been cliked");
  }

  // Arrow fx for binding
  handleCardClick = (card) => {
  console.log(card, this)
  }

  generateCards(){
    const result = [];
    const candidates = shuffle(SYMBOLS);
    while(candidates.length !== 0){
      result.push(candidates.pop());
    }
    return result;
  }

  cards = this.generateCards();
   

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
          <Card
            card={card}
            feedback="visible"
            key={index}
            onClick={this.clicked}
          />
            )
          )
        }
        <HallOfFame entries = {FAKE_HOF}/>
      </div>
    )
  }
}

export default App
