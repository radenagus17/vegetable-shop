import { GET_ITEMS, SET_ITEMS_ERR, SET_ITEMS_LOADING } from "../actionType";

const initial_state = {
  items: [],
  itemLoading: true,
  itemErr: {},
};

export default function itemReducer(state = initial_state, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload };
    case SET_ITEMS_ERR:
      return { ...state, itemErr: action.payload };
    case SET_ITEMS_LOADING:
      return { ...state, itemLoading: action.payload };

    default:
      return state;
  }
}
