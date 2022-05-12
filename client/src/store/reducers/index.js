import itemReducer from "./itemReducer";
import companyReducer from "./companyReducer";
import { combineReducers } from "redux";

export default combineReducers({
  itemReducer,
  companyReducer,
});
