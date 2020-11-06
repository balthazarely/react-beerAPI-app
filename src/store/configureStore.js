import { createStore } from "redux";
import testReducer from "./testReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";

export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
