import styled from "styled-components";
import Welcome from "./assets/components/Welcome/Welcome";
import Game from "./assets/components/Game/Game";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(false);

  const togglePlay = () => {
    setGameStart((prev) => !prev);
  };
  return (
    <>
      {/* <Button>Styled components</Button> */}
      {gameStart ? <Welcome togglePlay={togglePlay} /> : <Game />}
    </>
  );
}

export default App;

// const Button = styled.button`
//   border: none;
//   background-color: blue;
//   color: white;
//   padding: 10px 30px;
// `;
