import React from 'react';
import './App.css';
import Deck from './components/Deck'

function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <h1>Deck of Cards</h1><br />
        {/* entry point of the Deck  */}
        <Deck />
      </div>
    </div>
  );
}

export default App;
