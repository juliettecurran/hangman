import React, { useState } from 'react';
import './App.css';
import Figure from './Components/Figure';
import Header from './Components/Header';
import IncorrectLetters from './Components/IncorrectLetters';
import Word from './Components/Word';

const words = [
  'kidnapped',
  'rainbows',
  'tricked',
  'roses',
  'sunshine',
  'dangerous',
  'ambush',
  'fairyland',
  'teddybear',
  'demon',
  'culprit',
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  /* States */

  const { playable, setPlayable } = useState(true);
  const { correctLetters, setCorrectLetters } = useState([]);
  const { incorrectLetters, setIncorrectLetters } = useState([]);

  return (
    <div className='App'>
      <Header />
      <Figure />
      <IncorrectLetters incorrectLetters={incorrectLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
  );
}

export default App;
