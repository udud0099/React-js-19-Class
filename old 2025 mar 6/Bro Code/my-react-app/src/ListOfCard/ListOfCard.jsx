import React, { useState } from "react";

const ListOfCard = () => {
  const [cars, setCars] = useState([
    { name: "Tata", price: 100, size: 120 },
    { name: "Volvo", price: 2100, size: 20 },
    { name: "Nano", price: 1100, size: 210 },
  ]);
  function addNewCar() {
    let carName = document.getElementById("carName").value;
    let carPrice = document.getElementById("carPrice").value;
    let carSize = document.getElementById("carSize").value;
    if (carName == "" || carPrice == 0 || carSize == 0) {
      return alert("plz fill all value");
    }
    document.getElementById("carName").value = "";
    document.getElementById("carPrice").value = 0;
    document.getElementById("carSize").value = 0;
    setCars((c) => [...c, { name: carName, price: carPrice, size: carSize }]);
  }
  function removeCar(i) {
    setCars(cars.filter((e, index) => i !== index));
  }

  return (
    <>
      <h1>ListOfCard</h1>

      <ul>
        {cars.map((car, i) => (
          <li key={i} onClick={() => removeCar(i)}>
            {car.name} {car.price} {car.size}
          </li>
        ))}
      </ul>
      <br />
      <div>
        <label>
          <br />
          <input type="text" placeholder="Add Car name" id="carName" />
          <br />
          <input type="number" placeholder="Add Price" id="carPrice" />
          <br />
          <input type="number" placeholder="Add Size" id="carSize" />
          <br />
          <button onClick={addNewCar}>Add New Car</button>
        </label>
      </div>
    </>
  );
};

export default ListOfCard;
