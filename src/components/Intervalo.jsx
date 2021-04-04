import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { changeNumber } from "../store/actions/number";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { min, max } = props;

  return (
    <Card Title="Intervalo de Números" Red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
};
