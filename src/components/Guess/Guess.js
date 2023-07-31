import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checkedLetters =
    value && value.length > 0
      ? checkGuess(value, answer)
      : // Fallback for undefined value👇
        Array(5).fill({
          letter: "",
          status: "",
        });

  return (
    <p className="guess">
      {checkedLetters.map(({ letter, status }, i) => (
        <span className={`cell ${status}`} key={i}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
