import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [noSel, setNoSel] = useState(0);

  function inc() {
    if (noSel < 20) {
      setNoSel((per) => per + 1);
      setNoSel((per) => per + 1);
      setNoSel((per) => per + 1);
    }
  }
  function dec() {
    if (noSel > 0) {
      setNoSel((per) => per - 1);
      setNoSel((per) => per - 1);
      setNoSel((per) => per - 1);
    }
  }
  return (
    <>
      <h1>only 0 to 20 value</h1>
      <p>{noSel}</p>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </>
  );
}

export default App;
