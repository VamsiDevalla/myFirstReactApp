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

  changeNameHandler= (newName)=>{
    // console.log("change name clicked")
    // don't do this this.state.persons[0].name = "Devalla Vamsi" 
    // react has a built in meathod to update state of an class show an follows:
    this.setState({
      persons: [
        {
          name:newName,
          age:23
        },
        {
          name:"Vamsi Devalla",
          age:25
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button onClick={this.changeNameHandler.bind(this,"Devalla Vamsi")}>change name</button>
        <Person 
          name={this.state.persons[0].name}>
          My Age: {this.state.persons[0].age}
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          //while we can use closures, they are not as efficent as bind as used above in button
          click={()=> this.changeNameHandler("Chanti")}> 
          My Age: {this.state.persons[1].age}
        </Person>
      </div>
    );
  }
}

export default App;
