import React from "react";

import "../styles/AddButton.scss";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/actions.js";

const AddButton = ({startNewItem}) => {
  const createNewTask = () => {
    startNewItem();
  }

  return <div className="add-btn" onClick={createNewTask}></div>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    startNewItem: () => dispatch(actionTypes.startNewItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);

