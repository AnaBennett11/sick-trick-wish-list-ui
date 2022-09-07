import React from 'react';
import { Component } from 'react';
import Tricks from "../Tricks/Tricks";
import './App.css';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/tricks')
     .then(response => response.json())
     .then(data => {
        this.setState({ tricks: data})
     })
  }

  addTrick = (trick) => {
    this.setState({tricks: [...this.state.tricks, trick]})
    return this.state.tricks
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} currentTricks={this.state.tricks}/>
        <Tricks currentTricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;