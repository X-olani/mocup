import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./app.scss";
import { Kid } from "./Components/kids";
import { Adult } from "./Components/adult";
import { NavLink } from "react-router-dom";
export const App = props => {
  document.addEventListener("DOMContentLoaded", () => {
    //  document.getElementById("kid").style.display = "none";
    // document.getElementById("adult").style.display = "none";
  });

  return (
    <div id="home">
      <div className="main-img">
        <div className="buttons">
          <NavLink
            to="/kids"
            id="select-side" /* onClick={() => show("kids")}*/
          >
            <label>kids</label>
          </NavLink>
          <NavLink
            to="/adult"
            id="select-side" /*onClick={() => show("adult")}*/
          >
            <label>Adults</label>
          </NavLink>
        </div>
      </div>
      <div />
    </div>
  );
};
