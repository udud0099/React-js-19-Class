import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+=-`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  return (
    <>
      <h1>hello</h1>
      <div>
        <input type="text" value={password} />
        <button>copy</button>
        <label>
          len: {length}{" "}
          <input
            className="text-black"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            onClick={passwordGenerator}
          />
        </label>
        <label>
          Number{" "}
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => {
              setNumber((p) => !p);
            }}
          />
        </label>
        <label>
          spical{" "}
          <input
            type="checkbox"
            defaultChecked={character}
            onChange={() => {
              setCharacter((c) => !c);
            }}
          />
        </label>
      </div>
      {length}
    </>
  );
}

export default App;
