import React from "react";
import "../styles/Main.scss";

import Tasks from "./Task.jsx";
import TaskCard from "./EditTaskCard.jsx";
import NewTaskCard from "./NewTaskCard.jsx";
import Navbar from "./Navbar.jsx";
import AddButton from "./AddButton.jsx";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/actions.js";

const Main = ({ isEditItem, isNewItem }) => {
  return (
    <div className="main-container">
      <div>
        <Navbar />
        {(isEditItem && !isNewItem) && <TaskCard/>}
        {(!isEditItem && isNewItem) && <NewTaskCard/>}
        {(!isEditItem && !isNewItem) && <Tasks/>}
      </div>
      {(!isEditItem && !isNewItem) && <AddButton />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isEditItem: state.isEditItem,
    isNewItem: state.isNewItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
