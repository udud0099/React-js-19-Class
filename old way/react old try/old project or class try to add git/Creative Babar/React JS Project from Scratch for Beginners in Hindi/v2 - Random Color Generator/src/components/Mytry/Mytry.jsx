import React, { useCallback, useState, useEffect } from "react";
import "./Mytry.css";

const Mytry = () => {
  const [color, setColor] = useState("#");
  let opt = "0123456789abcdef";
  function changeColor() {
    setColor("#");
    for (let i = 1; i <= 6; i++) {
      let ran = Math.floor(Math.random() * 16 + 1) - 1;
      // color += opt[ran];
      setColor((per) => per + opt[ran]);
      // console.log(ran);
    }
    // console.log("ok");
    // console.log(color);
  }
  const memoizedCallback = useCallback(() => {
    changeColor();
  }, []);

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <span>{color}</span>
      </div>
      <button onClick={memoizedCallback}>chang</button>
    </>
  );
};

export default Mytry;
