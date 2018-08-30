import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import athletesReducer from "./athletesReducer";
export default combineReducers({
  athletes: athletesReducer
  // errors: errorReducer
});
