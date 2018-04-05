import React, { Component } from 'react'
import './App.css'
import Card from "./Card"
import GuessCount from "./GuessCount"

class App extends Component {

  clicked(card){
    console.log(card+",has been cliked");
  }

  render() {
    return (
      <div className = "memory">
        <GuessCount guesses = {0}/>
        <Card card = ":)" feedback = "hidden" onClick = { this.clicked }/>
        <Card card = ":)" feedback = "hidden" onClick = { this.clicked }/>
        <Card card = ":(" feedback = "hidden" onClick = { this.clicked }/>
        <Card card = ":(" feedback = "hidden" onClick = { this.clicked }/>
        <Card card = ":!" feedback = "hidden" onClick = { this.clicked }/>
        <Card card = ":!" feedback = "hidden" onClick = { this.clicked }/>
      </div>
    )
  }
}

export default App
