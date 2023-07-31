import React from "react";

function GameResult({ guesses, answer, gameStatus }) {
  function renderResult(gameStatus) {
    switch (gameStatus) {
      case "won":
        return (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
              </strong>
              .
            </p>
          </div>
        );
      case "lost":
        return (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        );
      default:
        return;
    }
  }
  return renderResult(gameStatus);
}

export default GameResult;
