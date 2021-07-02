import React from 'react';

const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <div clasName='wrong-letters-container'>
      {incorrectLetters.length > 0 && <p>Wrong</p>}
      {incorrectLetters
        .map((letter, index) => <span key={index}>{letter}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ',', curr]),
          null
        )}
    </div>
  );
};

export default IncorrectLetters;
