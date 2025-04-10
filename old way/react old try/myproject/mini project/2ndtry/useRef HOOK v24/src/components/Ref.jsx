import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const [val, setVal] = useState("");
  const [num, setNum] = useState(0);

  //   const refElem = useRef(
  //     "useRef hook retutn Object and hear object Current is a key"
  //   );
  //   console.log(refElem);
  //   console.log(refElem.current);

  const refElem = useRef(0);
  console.log(refElem.current);

  function change(e) {
    setVal(e.target.value);
    // it give error because we try use both useRef feature same time
    // refElem.current = refElem.current + 1;
  }

  //   it shor how may key press on key board
  //   console.log(refElem.current);

  //   useRef;
  function submit() {
    refElem.current.style.color = "red";
  }

  //  unstable increase num
  //   useEffect(() => {
  //     setNum(num + 1);
  //   });
  return (
    <>
      <h1>use useRef Hook :</h1>
      <input type="text" ref={refElem} value={val} onChange={change} />
      <button onClick={submit}>Submit</button>
      {/* <h2> Count key press in keyboard : {refElem.current}</h2> */}
    </>
  );
}
