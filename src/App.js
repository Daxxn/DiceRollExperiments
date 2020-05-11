import React from 'react';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App=header">
        <h2>Dice Baby!</h2>
      </header>
      <div>
        <MainPage diceCount={4} />
      </div>
    </div>
  );
}

export default App;
