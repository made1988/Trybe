import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const thingsToDo = ['Finish the exercises', 'Feed the car', 'Cook dinner', 'Read Sapiens'];

function App() {
  return (
    <ul>
      {thingsToDo.map(thing => task(thing))}
    </ul>
  ) 
}

export default App;
