import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameResult from "../GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  // running | lost | won
  const [gameStatus, setGameStatus] = useState("running");

  function handleAddToGuesses(guess) {
    const nextGuesses = [
      ...guesses,
      {
        value: guess,
        id: crypto.randomUUID(),
      },
    ];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleAddToGuesses={handleAddToGuesses}
        disabled={gameStatus !== "running"}
      />
      <GameResult guesses={guesses} answer={answer} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
