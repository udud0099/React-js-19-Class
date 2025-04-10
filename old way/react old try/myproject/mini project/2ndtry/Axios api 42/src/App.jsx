import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Axios from "./Axios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Axios />
    </div>
  );
}

export default App;
