import { React, memo } from "react";
function Call2({ todo, data }) {
  console.log("todo function");
  return (
    <>
      <h1>Call back 2</h1>
      {data.map((curVla, index) => {
        return <h2 key={index}>{curVla + index}</h2>;
      })}
      <button onClick={todo}>Add Todo</button>
    </>
  );
}
export default memo(Call2);
