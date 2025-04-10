import { useState } from "react";

export default function ChangeBg() {
  const [text, setText] = useState("Red Bg");
  const [bg, setBg] = useState("red");
  function change() {
    if (bg == "red") {
      setBg("blue");
      setText("Blue Bg");
    } else {
      setBg("red");
      setText("Red Bg");
    }
  }
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <div>
          <button onClick={change}>{text}</button>
        </div>
      </div>
    </>
  );
}
