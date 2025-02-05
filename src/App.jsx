import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
function App() {
  const [count, setCount] = useState(0);

  const colors = ["yellow", "light", "purple", "blue", "green", "red"];
  // console.log(colors);
  const handleClick = () => {
    // setCount(count + 1);
    console.log("you clicked me");
  };

  return (
    <>
      <div className="bg-dark  min-h-screen flex flex-col items-center justify-center relative">
        <h1
          // onClick={handleClick}
          className="font-heading text-center text-primary text-5xl font-bold absolute top-8"
        >
          Color Picker <br /> Game
        </h1>
        <p className="text-light mt-24 font-lead">
          Pick the correct color to win
        </p>
        <p className="text-light  mb-8">Score: {count}</p>
        <Container>
          <Button className="bg-yellow w-40 mx-auto" onClick={handleClick} />

          <div className="grid grid-cols-3 gap-4 mt-4">
            {colors.map((color, id) => (
              <Button key={id} className={`bg-${color}`}></Button>
            ))}
          </div>

          <button className="my-4 bg-dark text-light py-4 rounded font-lead">
            New Game
          </button>
        </Container>
      </div>
    </>
  );
}

export default App;
