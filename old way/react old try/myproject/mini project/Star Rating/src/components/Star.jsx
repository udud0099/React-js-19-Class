import { useState } from "react";

export default function Star() {
  const arr = [0, 0, 0, 0, 0];
  const [num, setNum] = useState(0);
  const [hov, setHov] = useState(0);
  return (
    <>
      <h1>
        Star Reating {num} {hov}
      </h1>
      {arr.map((cn, ind) => {
        return (
          <span
            className={(hov == 0 && ind < num) || ind < hov ? "col" : "uncol"}
            key={ind}
            onClick={() => {
              setNum(ind + 1);
            }}
            onMouseEnter={() => setHov(ind + 1)}
            onMouseOut={() => setHov(0)}
            style={{ fontSize: "90px", fontWeight: 800, cursor: "pointer" }}
          >
            *
          </span>
        );
      })}
    </>
  );
}
