import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axios() {
  //   const getData = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const jsonData = await response.json();
  //     console.log(jsonData);
  //   };

  const [store, setStore] = useState();
  //   const getData = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         console.log(res);
  //         setStore(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Axios</h1>
    </>
  );
}
