import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(count);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function totalValue() {
    setValue(value + count);
  }
  return (
    <>
      <h1>Increase by Value : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>Count value is : {value}</h1>
      <button onClick={totalValue}>Add the value</button>
    </>
  );
}
