import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
function App() {
  const [count, setCount] = useState(0);

  const colors = ["red", "light", "purple", "bluee", "green", "yellow"];

  const random = Math.floor(Math.random() * 6);

  const handleClick = () => {
    setCount(count + 1);
    console.log(colors[random]);
  };

  const resetGame = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-dark  min-h-screen flex flex-col items-center justify-center relative">
        <h1
          onClick={handleClick}
          className="-mt-40 font-heading text-center text-primary text-4xl font-bold"
        >
          Color Picker <br /> Game
        </h1>
        <p className="my-4 w-[80%] mx-auto text-light font-lead text-center">
          Pick the correct color that matches the rectangle to win
        </p>
        <p className="text-light  mb-8">Score: {count}</p>
        <Container>
          <Button bg={`bg-${colors[random]}`} />

          <div className="grid grid-cols-3 gap-4 mt-4">
            {colors.map((color, id) => (
              <Button key={id} bg={`bg-${color}`} />
            ))}
            {/* <Button bg="bg-red" />
            <Button bg="bg-bluee" />
            <Button bg="bg-light" />
            <Button bg="bg-yellow" />
            <Button bg="bg-green" />
            <Button bg="bg-purple" /> */}
            <p className={`text-${colors[random]}`}>{colors[random]}</p>
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
