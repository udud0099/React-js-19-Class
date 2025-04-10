import { useState } from "react";

export default function DigitalClockV18() {
  let currDate = new Date().toLocaleTimeString();
  const [showTime, setShowTime] = useState(currDate);

  setInterval(() => {
    let currDate = new Date().toLocaleTimeString();

    setShowTime(currDate);
  }, 1000);
  return (
    <>
      <h1>Clock is ready</h1>
      {currDate}
    </>
  );
}
