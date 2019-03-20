import React, { Component } from "react";
import "../app.scss";
export const Burger = props => {
  console.log(props);
  return (
    <div>
      <nav className="nav-bar" />
      <div>
        {props.itemsOnShow.map((item, index) => {
          let a;
          if (item.length === 0) {
            a = "Please select a item";
          } else {
            a = item.name;
          }
          return a;
        })}
      </div>
    </div>
  );
};
