import * as actionTypes from "./actionTypes.js";

export const addItem = () => {
  return {
    type: actionTypes.ADD_ITEM,
  };
};

export const editItem = (item) => {
  return {
    type: actionTypes.EDIT_ITEM,
    item: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    item: item,
  };
};

export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title,
  };
};

export const setItem = (item) => {
  return {
    type: actionTypes.SET_ITEM,
    item: item,
  };
};

export const startEditItem = () => {
  return {
    type: actionTypes.START_EDIT_ITEM,
  };
};

export const cancelEditItem = () => {
  return {
    type: actionTypes.CANCEL_EDIT_ITEM,
  };
};

export const startEditItems = () => {
  return {
    type: actionTypes.START_EDIT_ITEMS,
  };
};

export const cancelEditItems = () => {
  return {
    type: actionTypes.CANCEL_EDIT_ITEMS,
  };
};

export const startNewItem = () => {
  return {
    type: actionTypes.START_NEW_ITEM,
  };
};

export const cancelNewItem = () => {
  return {
    type: actionTypes.CANCEL_NEW_ITEM,
  };
};
