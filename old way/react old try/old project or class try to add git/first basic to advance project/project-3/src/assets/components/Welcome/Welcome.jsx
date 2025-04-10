import React from "react";
import "./Welcome.css";
import heroImg from "../../Images/hero.png";

const Welcome = ({ togglePlay }) => {
  return (
    <div>
      <div className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heroImg">
                <img src={heroImg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="heroSec">
                <h1>DICE GAME</h1>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="btn btn-dark"
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
