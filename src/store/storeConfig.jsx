import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    switch (action.type) {
      case "numero minimo":
        return {
          ...state,
          min: action.payload,
        };

      case "numero maximo":
        return {
          ...state,
          max: action.payload,
        };

      default:
        return {
          min: 31,
          max: 77,
        };
    }
  },
});

//vai criar o state da aplicação
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
