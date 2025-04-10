import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  //   function handleChange(e) {
  //     // console.log(e.target.value);
  //     setName(e.target.value);
  //     document.getElementById("nowName").innerHTML = name;
  //   }
  return (
    <>
      <form>
        <input
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
      <h1 id="nowName"></h1>
    </>
  );
}
