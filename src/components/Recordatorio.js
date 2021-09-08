import React from "react";

const Recordatorio =(props) => {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{props.historial}</ul>
      </div>
    );
  }

export default Recordatorio;
