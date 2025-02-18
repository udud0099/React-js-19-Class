import React from "react";
import style from "./Card.module.css"; 

const Card = ({ imgSrc, imgAlt, dogName, rate, weiht }) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.cardImg}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className={style.cardText}>
          <h1>This is Dog {dogName}</h1>
          <p>Price Rs. {rate}</p>
          {/* {weiht ? <p>Weaight {weiht} KG</p> : ""} */}
          <p>Weaight {weiht} KG</p>
        </div>
      </div>
    </>
  );
};

export default Card;
