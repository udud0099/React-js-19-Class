import React from "react";

const BgcolorChange = () => {
  function BgColorByChose(a) {
    document.querySelector("body").style.backgroundColor = a;
  }
  return (
    <>
      <div>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => BgColorByChose("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => BgColorByChose("yellow")}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => BgColorByChose("green")}
        >
          Green
        </button>
      </div>
    </>
  );
};

export default BgcolorChange;
