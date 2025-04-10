import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Callback from "./Callback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Callback />
    </div>
  );
}

export default App;
