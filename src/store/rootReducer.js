import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
