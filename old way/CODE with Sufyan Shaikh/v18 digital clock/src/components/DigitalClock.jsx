import React from "react";
import { useState } from "react";

const DigitalClock = () => {
  let curTime = new Date().toLocaleString();
  const [time, setTime] = useState(curTime);

  const updateTime = () => {
    let curTime = new Date().toLocaleString();
    setTime(curTime);
  };
  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <>
      <div>
        <h1>Digital clock</h1>
        <h3>{time}</h3>
      </div>
    </>
  );
};

export default DigitalClock;
