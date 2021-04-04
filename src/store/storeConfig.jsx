import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    console.log(state);
    return {
      min: 77,
      max: 31,
    };
  },
});

function storeConfig() {
  //vai criar o state da aplicação
  return createStore(reducers);
}

export default storeConfig;
