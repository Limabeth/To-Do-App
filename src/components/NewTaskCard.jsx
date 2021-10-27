import React, { useRef } from 'react';
import "../styles/NewTaskCard.scss";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/actions.js";

const NewTaskCard = ({setTitle, addItem, cancelNewItem}) => {
    const inputREF = useRef();

    const cancelNewTask = () => {
      cancelNewItem();
    }

    const addNewTask = () => {
      if (inputREF.current.value !== "") {
        setTitle(inputREF.current.value);
        addItem();
        cancelNewItem();
      }
    }

    return (
        <div className="new-task-card">
        <textarea placeholder="Введите текст задачи" ref={inputREF}/>
        <div>
          <button className="cancel-btn" onClick={cancelNewTask}>Закрыть</button>
          <button className="save-btn" onClick={addNewTask}>Сохранить</button>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    addItem: () => dispatch(actionTypes.addItem()),
    cancelNewItem: () => dispatch(actionTypes.cancelNewItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskCard);