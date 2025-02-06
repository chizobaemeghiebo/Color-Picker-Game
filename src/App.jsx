import React from "react";
import { useState, useEffect } from "react";
function App() {
  const colors = ["red", "white", "purple", "blue", "green", "yellow"];
  const [targetColor, setTargetColor] = useState("red");
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");

  const random = Math.floor(Math.random() * colors.length);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const newTargetColor = colors[random];
    setTargetColor(newTargetColor);
    setScore(0);
    setStatus("");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      const newTargetColor = colors[random];
      setTargetColor(newTargetColor);
      setScore(score + 1);
      setStatus("Correct! You win ✨");
    } else {
      setScore(0);
      setStatus("Oops! Try that again 😒");
    }
  };

  const handleChange = () => {
    console.log("I have been changed");
  };

  return (
    <>
      <div className="bg-dark py-8  min-h-screen flex flex-col items-center overflow-hidden">
        <h1 className="font-heading text-center text-primary text-4xl font-bold">
          Color Picker <br /> Game
        </h1>
        <p
          data-testid="gameInstructions"
          className="my-4 w-[80%] text-sm mx-auto text-white font-lead text-center"
        >
          Pick the correct color that matches the large rectangle to win
        </p>
        <div className="bg-primary p-4 rounded shadow-md w-[90%] max-w-[500px] mx-auto">
          <div
            data-testid="colorBox"
            className="p-14 rounded cursor-pointer"
            style={{ backgroundColor: targetColor }}
          ></div>
          <div className="grid grid-cols-3 my-4 items-stretch justify-center gap-2.5">
            {colors.map((color) => (
              <button
                key={color}
                data-testid="colorOption"
                className="p-10 md:p-14 rounded hover:cursor-pointer"
                onClick={() => handleGuess(color)}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p data-testid="score" className="text-dark font-lead text-sm ">
              Score: {score}
            </p>
            <p
              data-testid="gameStatus"
              className="animate-bounce animate-duration-150 repeat-0 text-dark font-lead text-sm"
            >
              {status}
            </p>
          </div>
          <button
            data-testid="newGameButton"
            className=" mt-4 bg-dark text-white w-full py-4 rounded font-lead"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
