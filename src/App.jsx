import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
}

function Calculator() {
    return (
        <div>
            <input />
            +
            <input />
            =
            <input />
        </div>
    )
}

export default App;
