import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux"; //ao state da aplicação

function Media(props) {
  const { min, max } = props.numbersMaxMin;

  return (
    <Card Title="Media dos Números" Green>
      <div>
        <span>
          <span> Resultado </span>
          <strong> {(max + min) / 2} </strong>
        </span>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    numbersMaxMin: state.numeros,
  };
};

export default connect(mapStateToProps)(Media);
