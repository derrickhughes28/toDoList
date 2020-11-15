import React, { Component } from 'react';
import AddPeople from './AddPeople';
import People from './People'
class App extends Component {
 state = {
   people : [
    {name: "Derrick", age:'24', favColor:'green', id:1},
    {name: "Derrick 1", age:'15345', favColor:'green', id:2},
    {name: "Derrick 2", age:'24111111111', favColor:'green', id:3},
  ]
 }
 addPerson = (person) => {
person.id = Math.random();
let people = [...this.state.people, person]
this.setState({
  people: people
})
 }
 render() {
  return (
    <div className="App">
     <h1>my first react app</h1>
     <People people={this.state.people}/>
     <AddPeople/>
    </div>
  );
}
}
export default App;
