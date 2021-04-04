import "./Intervalo.css";
import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import { minNumber, maxNumber } from "../store/actions/number";

const Intervalo = (props) => {
  const { min, max } = props.numerosMaxMin;

  return (
    <Card Title="Intervalo de Números" Red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.propMinNumber(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.propMaxNumber(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    numerosMaxMin: state.numeros,
  };
};

const mapDispatchToProp = (dispatch) => {
  // objeto enviado para combineReducers em storeConfig
  let action = {};

  return {
    propMinNumber(valueNumberMin) {
      action = minNumber(valueNumberMin);
      dispatch(action);
    },
    propMaxNumber(valueNumberMax) {
      action = maxNumber(valueNumberMax);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
