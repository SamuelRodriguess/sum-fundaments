import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Sorteio = (props) => {
  const { max, min } = props.numerosMaxMin;
  const numberSorter = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card Title="Sorteio de um Número" Purple>
      <div>
        <span>
          <span> Resultado </span>
          <strong> {numberSorter} </strong>
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

export default connect(mapStateToProps)(Sorteio);
