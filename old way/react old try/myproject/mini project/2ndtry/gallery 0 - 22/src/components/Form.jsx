import { useState } from "react";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [runtime, setRuntime] = useState("");
  const [show, setShow] = useState("");
  function getName(e) {
    if (e.target.name == "fname") {
      setFname(e.target.value);
      setRuntime(e.target.value);
    }
    if (e.target.name == "lname") {
      setLname(e.target.value);
      setRuntime(e.target.value);
    }
  }
  function subBtn(e) {
    e.preventDefault();
    setShow(fname + " " + lname);
    setShow(fname + " " + lname);
  }
  return (
    <>
      <h1>This is runtime</h1>
      <p>{runtime}</p>
      <h1>Show on click</h1>
      <p>{show}</p>
      <form onSubmit={subBtn}>
        <input type="text" onChange={getName} value={fname} name="fname" />
        <input type="text" onChange={getName} value={lname} name="lname" />
        <input type="submit" />
      </form>
    </>
  );
}
