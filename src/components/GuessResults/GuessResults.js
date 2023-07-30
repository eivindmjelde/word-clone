import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  const numberOfPlaceholders = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const placeholders = range(numberOfPlaceholders);

  console.log(placeholders);

  return (
    <>
      <div className="guess-results">
        {guesses.map(({ id, value }) => (
          <Guess key={id} value={value} />
        ))}
        {placeholders.map((_, i) => (
          <Guess key={i} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
