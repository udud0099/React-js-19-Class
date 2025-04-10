import React, { useState } from "react";
import styled from "styled-components";
import "./Game.css";
import d0 from "../../Images/dice_0.png";
import d1 from "../../Images/dice_1.png";
import d2 from "../../Images/dice_2.png";
import d3 from "../../Images/dice_3.png";
import d4 from "../../Images/dice_4.png";
import d5 from "../../Images/dice_5.png";
import d6 from "../../Images/dice_6.png";

const Game = () => {
  const arrNo = [1, 2, 3, 4, 5, 6];
  const [selNo, setSelNo] = useState(0);
  const [total, setTotal] = useState(0);
  // console.log(selNo);

  const [imgNo, setImgNo] = useState(0);
  const random = () => {
    return Math.ceil(Math.random() * 6);
  };
  function myChoice() {
    if (selNo === 0) {
      document.getElementById("warning").style.display = "block";
      return;
    } else {
      document.getElementById("warning").style.display = "none";
    }
    if (selNo === random) {
      setTotal(total + selNo);
    } else {
      setTotal(total - 1);
    }
  }
  console.log(imgNo);
  function reset() {
    setSelNo(0);
    setTotal(0);
  }
  return (
    <div>
      <div className="game">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="total-score">
                <h1>{total}</h1>
                Total Score
              </div>
            </div>
            <div className="col-6">
              <div className="selete">
                <span id="warning">Plz chose the number</span>
                <div>
                  {arrNo.map((value, index) => (
                    <Box
                      isselected={value === selNo}
                      onClick={() => setSelNo(value)}
                      key={index}
                    >
                      {value}
                    </Box>
                  ))}
                </div>
                <h4>Select Number</h4>
              </div>
            </div>
          </div>
          {/* main part dice place */}
          <div className="row">
            <div className="col-12">
              <div className="dice">
                <img
                  onClick={myChoice}
                  src={`/src/assets/Images/dice_${imgNo}.png`}
                  alt=""
                />
                <h1>Click on Dice to roll</h1>
                <button onClick={reset}>Reset Score</button>
                <button>Show Rules</button>
              </div>
            </div>
          </div>

          {/* game rule */}
          <div className="row ">
            <div className="col-12">
              <div className="gameRule">
                <h1>How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                  after click on dice if selected number is equal to dice number
                  you will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

const Box = styled.div`
  border: 1px solid black;
  width: 50px;
  padding: 10px 20px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  margin: 0 10px;
  display: inline-block;
`;
