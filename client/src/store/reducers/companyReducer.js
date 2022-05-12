import { GET_COMPANIES, SET_COMP_ERR, SET_COMP_LOAD } from "../actionType";

const initial_state = {
  companies: [],
  compLoading: true,
  compErr: {},
};

export default function companyReducer(state = initial_state, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, companies: action.payload };
    case SET_COMP_ERR:
      return { ...state, compErr: action.payload };
    case SET_COMP_LOAD:
      return { ...state, compLoading: action.payload };

    default:
      return state;
  }
}
