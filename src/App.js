import React from 'react';
import './App.css';
import Deck from './components/Deck'

function App() {
  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      {/* entry point of the Deck  */}
      <Deck />
    </div>
  );
}

export default App;
