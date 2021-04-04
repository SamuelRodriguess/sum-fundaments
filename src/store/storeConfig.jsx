import { createStore, combineReducers } from "redux";
import numberReducer from "../store/reducers/numberReducer";

const reducers = combineReducers({
  numeros: numberReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
