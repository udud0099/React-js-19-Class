import React, { useState } from "react";

const ListOfFood = () => {
  const [food, setFoof] = useState(["apple", "Mango", "Banana", "abocado"]);

  function addFood() {
    let getFood = document.getElementById("AddFood").value;
    document.getElementById("AddFood").value = "";
    setFoof((f) => [...f, getFood]);
  }
  function removeFood(index) {
    setFoof(food.filter((e, i) => i !== index));
  }
  return (
    <>
      <h1>List Of Food</h1>
      <div>
        <ul>
          {food.map((f, i) => (
            <li onClick={() => removeFood(i)} key={i}>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <h1>Add Food Item</h1>
      <input type="text" placeholder="Add Food" id="AddFood" />
      <button onClick={addFood}>Add Food</button>
    </>
  );
};

export default ListOfFood;
