import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return task('Finish the exercises');
}

export default App;
