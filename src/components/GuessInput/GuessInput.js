import React from "react";

function WordInput({ handleAddToGuesses, setIsGameFinished, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleGuessChange(event) {
    const value = event.target.value.toUpperCase();
    setGuess(value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    handleAddToGuesses(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disabled}
        title="Please enter 5 letters from a to z"
        value={guess}
        onChange={handleGuessChange}
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        required
      />
    </form>
  );
}

export default WordInput;
