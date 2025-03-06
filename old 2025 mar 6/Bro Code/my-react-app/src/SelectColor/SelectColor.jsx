import { useState } from "react";

const SelectColor = () => {
  const [color, setColor] = useState("#000000");
  return (
    <>
      <h1>SelectColor</h1>
      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "300px",
          color: "white",

          textAlign: "center",
        }}
      >
        <h1 style={{ paddingTop: "120px" }}>Selectd Color is {color}</h1>
      </div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
};

export default SelectColor;
