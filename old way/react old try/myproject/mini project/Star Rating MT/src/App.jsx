import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Star from "./Star";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Star />
    </>
  );
}

export default App;
