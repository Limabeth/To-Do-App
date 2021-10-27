import React from "react";
import "../styles/Task.scss";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/actions.js";

const Task = (props) => {
  const deleteTask = () => {
    props.setItem(props.item);
    props.deleteItem();
  };

  const editTask = () => {
    if (props.isEditItems) {
      props.setItem(props.item);
      props.startEditItem();
    }
  };

  return (
    <div className="task-wrapper">
      {props.isEditItems ? (
        <div className="delete-sign" onClick={deleteTask}></div>
      ) : (
        <input type="radio" name="task" id={props.id}></input>
      )}
      {props.isEditItems ? (
        <p onClick={editTask}>{props.title}</p>
      ) : (
        <label htmlFor={props.id} onClick={editTask}>
          {props.title}
        </label>
      )}
    </div>
  );
};

const Tasks = ({ items, isEditItems, setItem, deleteItem, startEditItem }) => {
  return (
    <div className="tasks-wrapper">
      {items.map((item) => {
        return (
          <Task
            item={item}
            key={item.id}
            id={item.id}
            title={item.title}
            isEditItems={isEditItems}
            setItem={setItem}
            deleteItem={deleteItem}
            startEditItem={startEditItem}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
    items: state.items,
    isEditItem: state.isEditItem,
    isEditItems: state.isEditItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    deleteItem: () => dispatch(actionTypes.deleteItem()),
    startEditItem: () => dispatch(actionTypes.startEditItem()),
    //setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    //addItem: () => dispatch(actionTypes.addItem()),
    //editItem: () => dispatch(actionTypes.editItem()),
    //startEdit: () => dispatch(actionTypes.startEdit()),
    //cancelEdit: () => dispatch(actionTypes.cancelEdit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
