import * as actionTypes from "../../actions/actionTypes.js";

const initialState = {
  items: [
    { id: 1, title: "Пройти стажировку в Онли"  },
    { id: 2, title: "Побриться" },
    { id: 3, title: "Купить молоко" },
    { id: 4, title: "Не забыть забрать сына из садика" },
    { id: 5, title: "Купить сыр" },
  ],
  title: "",
  item: "",
  isEditItem: false,
  isEditItems: false,
  isNewItem: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const newItem = {
        id: Date.now(),
        title: state.title,
      };
      return {
        ...state,
        items: state.items.concat(newItem),
        title: "",
      };
    }

    case actionTypes.EDIT_ITEM: {
      const newList = [...state.items];
      const index = newList.indexOf(state.item);

      if (index !== -1) {
        newList[index].title = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case actionTypes.DELETE_ITEM: {
      const newList = [...state.items];
      const index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case actionTypes.START_EDIT_ITEM:
      return {
        ...state,
        isEditItem: true,
      };

    case actionTypes.CANCEL_EDIT_ITEM:
      return {
        ...state,
        isEditItem: false,
      };

    case actionTypes.START_EDIT_ITEMS:
      return {
        ...state,
        isEditItems: true,
      };

    case actionTypes.CANCEL_EDIT_ITEMS:
      return {
        ...state,
        isEditItems: false,
      };

    case actionTypes.START_NEW_ITEM:
      return {
        ...state,
        isNewItem: true,
      };

    case actionTypes.CANCEL_NEW_ITEM:
      return {
        ...state,
        isNewItem: false,
      };

    default:
      return state;
  }
};

export default reducer;
