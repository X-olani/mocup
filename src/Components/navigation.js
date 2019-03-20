import React, { Component } from "react";
import "../app.scss";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

export const Nav = props => {
  let count = 0;

  const dropDown = () => {
    let showing = (document.getElementById("nav-dropDown").style.display =
      "none");
    if (showing == true) {
      count = 1;
    }
    if (count == 0) {
      document.getElementById("nav-dropDown").style.display = "none";
      count = 1;
    } else {
      document.getElementById("nav-dropDown").style.display = "block";
      count = 0;
    }
  };
  return (
    <nav>
      <div className="nav">
        <IoIosMenu onClick={() => dropDown()} className="nav-bars" size={40} />
        <NavLink id="logo-mobile" to="/">
          <img id="logo" src={require("../images/Pegasus-PNG-Photos.png")} />
        </NavLink>
        <div className="headers">
          <div className="dropDown_menu">
            <h2>Home</h2>
            <div class="dropdown-content">
              <NavLink to="/kids">
                <h3 className="dropdown-content-header">Kids</h3>
              </NavLink>
              <NavLink to="/adult">
                <h3 className="dropdown-content-header">Adult</h3>
              </NavLink>
            </div>
          </div>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div id="nav-dropDown">
        <h2 className="nav-tabs">Home</h2>
        <h2 className="nav-tabs">About</h2>
        <h2 className="nav-tabs">Contact</h2>
      </div>
    </nav>
  );
};
