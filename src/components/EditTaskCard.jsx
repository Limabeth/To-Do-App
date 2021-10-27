import React, { useRef } from "react";
import "../styles/EditTaskCard.scss";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/actions.js";

const TaskCard = ({item, setTitle, editItem, cancelEditItem}) => {
  const inputREF = useRef();

  const cancelEdit = () => {
    cancelEditItem();
  }

  const saveItem = () => {
    if (inputREF.current.value !== "") {
      setTitle(inputREF.current.value);
      editItem();
      cancelEditItem();
    }
  }

  return (
    <div className="task-card">
      <input type="text" ref={inputREF} defaultValue={item.title}></input>
      <div>
        <button className="cancel-btn" onClick={cancelEdit}>Закрыть</button>
        <button className="save-btn" onClick={saveItem}>Сохранить</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditItem: () => dispatch(actionTypes.startEditItem()),
    cancelEditItem: () => dispatch(actionTypes.cancelEditItem()),
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    editItem: () => dispatch(actionTypes.editItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
