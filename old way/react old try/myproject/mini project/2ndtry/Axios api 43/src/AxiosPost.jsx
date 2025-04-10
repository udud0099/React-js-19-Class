import axios from "axios";
import React, { useState } from "react";

const AxiosPost = () => {
  const data = {
    fname: "",
    lname: "",
  };
  const [inputData, setInputData] = useState(data);
  const handleInput = (e) => {
    console.log(e.target.value);
    setInputData({ ...inputData, [e.target.value]: e.target.value });
  };
  console.log(inputData);
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>AxiosPost</div>
      <form onSubmit={handleForm}>
        <input type="text" name="fname" onChange={handleInput} />
        <input type="text" name="lname" onChange={handleInput} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AxiosPost;
