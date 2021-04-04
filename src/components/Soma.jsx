/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux"; //ao state da aplicação

const Soma = (props) => {
  const { max, min } = props.numerosMaxMin;

  return (
    <Card Title="Soma dos Números" Blue>
      <div>
        <span>
          <span> Resultado </span>
          <strong> {max + min} </strong>
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

export default connect(mapStateToProps)(Soma);
