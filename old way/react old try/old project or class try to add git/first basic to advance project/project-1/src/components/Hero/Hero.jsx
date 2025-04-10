import React from "react";
import "./Hero.css";
import hero from "../../assets/image/shoe_image.png";
import f from "../../assets/image/flipkart.png";
import a from "../../assets/image/amazon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container heroB">
        <div className="row">
          <div className="col-lg-6">
            <div className="heroL">
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <button className="btn btn-danger">Shop Now</button>
              <button className="btn btn-outline-secondary">Category</button>
              <br />
              <span>Also Available On</span>

              <img src={f} alt="" />
              <img src={a} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heroR">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
