import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { Component } from "./component";
import { onload } from "./App";
import { Footer } from "./Components/footer";
import { Error } from "./Components/error";
import { Kid } from "./Components/kids";
import { Adult } from "./Components/adult";
import { Nav } from "./Components/navigation";
import { BrowserRouter, Route, Switch } from "react-browser-router";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Component} exact />
          <Route path="/kids" component={Kid} />
          <Route path="/adult" component={Adult} />
          <Route component={Error} />
        </Switch>
      </Provider>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
