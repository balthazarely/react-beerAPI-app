import { combineReducers } from "redux";
import favoritesReducer from "../components/favoriteReducer";
import testReducer from "../sandbox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  favorite: favoritesReducer,
});

export default rootReducer;
