import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {

  //Understanding and using state
  state = {
    persons:[
      {name:"Mohamed Lamin", age:"20"},
      {name:"Chernoh", age:"21"},
      {name:"Binta",age:"2"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
      
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies:Soccer, Reading,Thinking.{" "}
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //understanding jsx //Nesting h1 elements
    //return React.createElement("div", null, "h1", "HI,I am a React App!!!");
    // returning elements
    //return React.createElement("div", null, React.createElement("h1",null,"Does this work now?"));
    // Applying CSS styling
    //return React.createElement("div", {className:"App"}, React.createElement("h1",null,"Does this work now?"));
  }
}

export default App;
