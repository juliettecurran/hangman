import React from 'react';

/* Split word, map to array, search array for correctLetter
      Add key for the loop. If correctLetter is included, display
    letter, if not display blank */

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className='word'>
      {selectedWord.split('').map((letter, index) => {
        return (
          <span className='letter' key={index}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
