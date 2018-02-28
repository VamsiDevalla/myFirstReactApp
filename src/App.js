import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state ={
    persons: [
      {
        name:"devalla",
        age:23
      },
      {
        name:"vamsi",
        age:25
      }
    ]
  }

  changeNameHandler= ()=>{
    console.log("change name clicked")
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button onClick={this.changeNameHandler}>change name</button>
        <Person name={this.state.persons[0].name}>My Age: {this.state.persons[0].age}</Person>
      </div>
    );
  }
}

export default App;
