import React from 'react';

const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <div className='wrong-letters-container'>
      <div>
        {incorrectLetters.length > 0 && <p>Wrong</p>}
        {incorrectLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
            null
          )}
      </div>
    </div>
  );
};

export default IncorrectLetters;
