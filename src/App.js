import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <Person name="Devalla">My Age: 23</Person>
      </div>
    );
  }
}

export default App;
