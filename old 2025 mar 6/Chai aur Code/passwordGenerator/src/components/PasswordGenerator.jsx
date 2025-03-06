import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGenerators() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null);

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

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <h1>hello</h1>
      <div>
        <input
          type="text"
          value={password}
          className="text-black  "
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>copy</button>
        <div>
          <label>
            len: {length}{" "}
            <input
              type="range"
              min={6}
              max={16}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </label>
        </div>
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
      {length} {password}
    </>
  );
}

export default PasswordGenerators;
