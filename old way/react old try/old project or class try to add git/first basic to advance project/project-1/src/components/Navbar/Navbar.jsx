import React from "react";
import "./Navbar.css";
import Logo from "../../assets/image/brand_logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LOCATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-danger">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
