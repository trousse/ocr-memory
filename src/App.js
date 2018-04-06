import React, { Component } from 'react'
import './App.css'
import Card from "./Card"
import GuessCount from "./GuessCount"
import shuffle from "lodash.shuffle";


export const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {

  clicked(card){
    console.log(card+",has been cliked");
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
      </div>
    )
  }
}

export default App
