import React from 'react';
import "../styles/Navbar.scss";

import { connect } from 'react-redux'
import * as actionTypes from '../redux/actions/actions.js';

const Navbar = ({isNewItem, isEditItems, isEditItem, startEditItems, cancelEditItems, cancelEditItem}) => {

  const triggerEdit = () => {
    if (isEditItems || isEditItem) {
      cancelEditItem();
      cancelEditItems();
    } else {
      startEditItems();
    }
  }

  return (
    <div className="navbar-wrapper">
      <h1 className="main-header">Сегодня</h1>
      <button disabled={isNewItem ? true : false} onClick={triggerEdit} className="edit-btn">{isEditItems ? "Отменить" : "Править"}</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      isNewItem: state.isNewItem,
      isEditItem: state.isEditItem,
      isEditItems: state.isEditItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      startEditItems: () => dispatch(actionTypes.startEditItems()),
      cancelEditItems: () => dispatch(actionTypes.cancelEditItems()),

      cancelEditItem: () => dispatch(actionTypes.cancelEditItem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
