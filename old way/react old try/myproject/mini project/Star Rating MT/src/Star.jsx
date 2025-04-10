import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

export default function Star() {
  const [starActive, setStarActive] = useState(5);
  const starno = 6 - starActive;
  function starValive1() {
    setStarActive(1);
    console.log(starActive);
  }
  function starValive2() {
    setStarActive(2);
    console.log(starActive);
  }
  function starValive3() {
    setStarActive(3);
    console.log(starActive);
  }
  function starValive4() {
    setStarActive(4);
    console.log(starActive);
  }
  function starValive5() {
    setStarActive(5);
    console.log(starActive);
  }

  return (
    <>
      <style>
        {`
        .starbox{
        transform: rotateY(180deg);  
  }
          .starbox .star:nth-child(-n + 5):nth-child(n + ${starActive}) {
            color: red;
          }
            .starbox .star{
            font-size: 64px;
            cursor: pointer;
            }
            .star:hover,
.star:hover ~ .star {
  color: gold; /* Color for stars to the left of the hovered star */
}

        `}
      </style>
      <h1>Start Reating</h1>
      <div className="starbox">
        <StarIcon className="star" onClick={starValive1} />

        <StarIcon className="star" onClick={starValive2} />
        <StarIcon className="star" onClick={starValive3} />
        <StarIcon className="star" onClick={starValive4} />
        <StarIcon className="star" onClick={starValive5} />
      </div>
      {starno}
    </>
  );
}
