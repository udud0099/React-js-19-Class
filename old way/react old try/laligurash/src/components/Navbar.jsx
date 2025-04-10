import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import Menua from "../assets/images/menuA.png";
import Search from "../assets/images/search.png";
import Searcha from "../assets/images/searchA.png";
import Cart from "../assets/images/cart.png";
import Carta from "../assets/images/cartA.png";
export default function Navbar() {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  function searchHandler() {
    // console.log("ok");
    let ser = document.getElementById("searchIcon");
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    document.getElementById("cartIcon").src = "/src/assets/images/cart.png";
    document.getElementById("menu-btn").src = "/src/assets/images/menu.png";

    if (ser.src == "http://localhost:5173/src/assets/images/search.png") {
      ser.src = "/src/assets/images/searchA.png";
    } else {
      document.getElementById("searchIcon").src =
        "/src/assets/images/search.png";
    }
  }
  function cartHandler() {
    // console.log("ok");
    let ser = document.getElementById("cartIcon");
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
    document.getElementById("searchIcon").src = "/src/assets/images/search.png";
    document.getElementById("searchIcon").src = "/src/assets/images/search.png";
    if (ser.src == "http://localhost:5173/src/assets/images/cart.png") {
      ser.src = "/src/assets/images/cartA.png";
    } else {
      document.getElementById("cartIcon").src = "/src/assets/images/cart.png";
    }
  }
  function navbarHandler() {
    // console.log("ok");
    let ser = document.getElementById("menu-btn");
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
    document.getElementById("searchIcon").src = "/src/assets/images/search.png";
    document.getElementById("cartIcon").src = "/src/assets/images/cart.png";
    if (ser.src == "http://localhost:5173/src/assets/images/menu.png") {
      ser.src = "/src/assets/images/menuA.png";
    } else {
      document.getElementById("menu-btn").src = "/src/assets/images/menu.png";
    }
  }
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="Laligurash Logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home" className="">
            home
          </a>
          <a href="#about" className="" id="">
            about
          </a>
          <a href="#menu" className="" id="">
            menu
          </a>
          <a href="#products" className="" id="">
            products
          </a>
          <a href="#review" className="" id="">
            review
          </a>
          <a href="#contact" className="" id="">
            contact
          </a>
          <a href="#blogs" className="" id="">
            blogs
          </a>
        </nav>
        <div className="icons">
          <div className="fas fa-search">
            <img
              className=""
              id="searchIcon"
              src="/src/assets/images/search.png"
              alt=""
              onClick={searchHandler}
            />
          </div>
          <div className="fas fa-shopping-cart">
            <img src={Cart} alt="" onClick={cartHandler} id="cartIcon" />
          </div>
          <div>
            <img src={Menu} id="menu-btn" alt="" onClick={navbarHandler} />
          </div>
        </div>
        <div className="search-form  " ref={searchRef}>
          <input
            type="search"
            placeholder="Search Here ....."
            id="search-box"
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          <div className="cart-item">
            <span className="close">X</span>
            <img src="/src/assets/images/1.png" alt="" />
            <div className="content">
              <h3>Cart Item 01</h3>
              <div className="price">Rs. 130</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="close">X</span>
            <img src="/src/assets/images/2.png" alt="" />
            <div className="content">
              <h3>Cart Item 02</h3>
              <div className="price">Rs. 10</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="close">X</span>
            <img src="/src/assets/images/3.png" alt="" />
            <div className="content">
              <h3>Cart Item 03</h3>
              <div className="price">Rs. 120</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="close">X</span>
            <img src="/src/assets/images/4.png" alt="" />
            <div className="content">
              <h3>Cart Item 04</h3>
              <div className="price">Rs. 140</div>
            </div>
          </div>
          <button className="btn">Checkout Now</button>
        </div>
      </header>
    </>
  );
}
