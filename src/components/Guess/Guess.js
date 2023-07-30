import React from "react";

function Guess({ value }) {
  const renderedLetters = value?.length > 0 ? [...value] : Array(5).fill("");
  return (
    <p className="guess">
      {renderedLetters.map((letter, i) => (
        <span className="cell" key={i}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
