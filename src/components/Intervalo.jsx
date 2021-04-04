import "./Intervalo.css";
import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import { changeNumber } from "../store/actions/number";

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
            onChange={(e) => props.changeNumber(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.changeNumber(+e.target.value)}
          />
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
  return {
    changeNumber(newNumber) {
      const action = changeNumber(newNumber);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
