import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Figure from './Components/Figure';
import IncorrectLetters from './Components/IncorrectLetters';
import Word from './Components/Word';
import Popup from './Components/Popup';
import Notification from './Components/Notification';

import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

const words = [
  'fairyland',
  'teddy',
  'sunshine',
  'rainbows',
  'picnic',
  'storybook',
  'cherub',
  'birthday',
  'daisy',
  'chocolate',
  'cannibal',
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!incorrectLetters.includes(letter)) {
            setIncorrectLetters((currentLetters) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, incorrectLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setIncorrectLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure incorrectLetters={incorrectLetters} />
        <IncorrectLetters incorrectLetters={incorrectLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
