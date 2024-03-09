import React from "react";
import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <Image
            src={logo}
            alt="company-logo"
            height={{ base: "5", md: "30" }}
          ></Image>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/About-Us">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
