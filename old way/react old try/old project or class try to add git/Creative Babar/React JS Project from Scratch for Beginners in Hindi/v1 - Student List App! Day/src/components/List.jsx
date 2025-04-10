import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <div key={id}>
              <img src={image} width="100px" alt="" />
              <h1>{name}</h1>
              <p>{age}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
