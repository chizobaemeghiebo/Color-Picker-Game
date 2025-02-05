import { useState } from "react";
import Container from "./components/Container";
function App() {
  const [count, setCount] = useState(0);
  const [winOrLose, setWinOrLose] = useState("You can do it");

  const colors = ["red", "light", "purple", "bluee", "green", "yellow"];

  const random = Math.floor(Math.random() * 6);

  const resetGame = () => {
    setCount(0);
    setWinOrLose("Let's gooo");
  };

  return (
    <>
      <div className="bg-dark py-8  min-h-screen flex flex-col items-center justify-center relative">
        <h1 className="font-heading text-center text-primary text-4xl font-bold">
          Color Picker <br /> Game
        </h1>
        <p className="my-4 w-[80%] text-sm mx-auto text-light font-lead text-center">
          Pick the correct color that matches the rectangle to win
        </p>
        <Container>
          <div
            // onClick={() => console.log(`${colors[random]}`)}
            className={`p-14 rounded cursor-pointer bg-${colors[random]}`}
          ></div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {colors.map((color, id) => (
              <div
                key={id}
                // onClick={handleClick}
                onClick={() => {
                  const targetColor = colors[random];
                  if (targetColor == color) {
                    setCount(count + 1);
                    setWinOrLose("Congrats! You Win!");
                  } else {
                    setWinOrLose("Try again! You Lose!");
                  }
                }}
                className={`p-14 rounded cursor-pointer bg-${color}`}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-light">Score: {count}</p>
            <p className="text-light">{winOrLose}</p>
          </div>

          <button
            className="my-4 bg-dark text-light py-4 rounded font-lead"
            onClick={resetGame}
          >
            New Game
          </button>
        </Container>
      </div>
    </>
  );
}

export default App;
