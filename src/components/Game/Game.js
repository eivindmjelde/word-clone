import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleAddToGuesses(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert("Max number of guesses reached");
      return;
    }

    setGuesses([
      ...guesses,
      {
        value: guess,
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddToGuesses={handleAddToGuesses} />
    </>
  );
}

export default Game;
