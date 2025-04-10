import { useState } from "react";

export default function Clock() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const update = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(() => {
    update();
  }, 1000);
  return (
    <>
      <h1>This is time</h1>
      <h2>{time}</h2>
    </>
  );
}
