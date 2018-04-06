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

  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
  }

  // Arrow fx for binding
  handleCardClick = (card) => {
    handleCardClick = index => {
      const { currentPair } = this.state
    
      if (currentPair.length === 2) {
        return
      }
    
      if (currentPair.length === 0) {
        this.setState({ currentPair: [index] })
        return
      }
    
      this.handleNewPairClosedBy(index)
  }

  generateCards(){
    const result = [];
    const candidates = shuffle(SYMBOLS);
    while(candidates.length !== 0){
      result.push(candidates.pop());
    }
    return result;
  }
   
  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)
  
    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
  
    return indexMatched ? 'visible' : 'hidden'
  }

  render() {
    const { cards, guesses, matchedCardIndices } = this.state;
    const won = matchedCardIndices.length === cards.length;
    return (
      <div className= "memory">
        <GuessCount guesses= {guesses} />
        {this.cards.map((card, index) => (
          <Card
            card= {card}
            feedback= {this.getFeedbackForCard(index)}
            index = {index}
            key= {index}
            onClick= {this.handleCardClick}
          />
            )
          )
        }
        <HallOfFame entries = {FAKE_HOF}/>
        <span className = "win_message"> {won && "Bravo vous avez reussi."} </span>
      </div>
    )
  }
}

export default App
