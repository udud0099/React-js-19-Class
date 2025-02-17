import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 255 },
    { id: 2, name: "mango", calories: 155 },
    { id: 3, name: "banana", calories: 535 },
    { id: 4, name: "graph", calories: 15 },
    { id: 5, name: "abocado", calories: 15 },
    { id: 6, name: "pineapple", calories: 3 },
  ];
  const fruitLI = fruits.map((x) => (
    <li key={x.id}>
      {x.name} {x.calories}
    </li>
  ));
  return (
    <>
      <ul>{fruitLI}</ul>
    </>
  );
};

export default List;
