import { connect } from "react-redux";
import { App } from "./App";
import { selectedItem } from "./store";
import { Burger } from "./Components/burger.js";

const mapStateToProps = state => ({});
const mapDispatchToProps = Dispatch => {
  {
  }
};

export const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
