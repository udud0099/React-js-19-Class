import React, { useState } from "react";

const ChangeBgSimple = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color == "red" ? "blue" : "red",
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: color == "red" ? "red" : "blue",
            fontSize: "16px",
            fontWeight: "700",
            color: "white",
          }}
          onClick={() => {
            setColor(color == "red" ? "blue" : "red");
          }}
        >
          {color == "red" ? "Change To Red" : "Change To Blue"}
        </button>
      </div>
    </>
  );
};

export default ChangeBgSimple;
