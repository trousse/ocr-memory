import React, { Component } from 'react'
import './App.css'
import Card from "./Card"
import GuessCount from "./GuessCount"

class App extends Component {
  render() {
    return (
      <div className = "memory">
        <GuessCount guesses = {0}/>
        <Card card = ":)" feedback = "hidden"/>
        <Card card = ":)" feedback = "hidden"/>
        <Card card = ":(" feedback = "hidden"/>
        <Card card = ":(" feedback = "hidden"/>
        <Card card = ":!" feedback = "hidden"/>
        <Card card = ":!" feedback = "hidden"/>
      </div>
    )
  }
}

export default App
