import React from "react";
import data from "./components/data.json";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";

const historial = [];

class App extends React.Component {
  state = {
    cuento : [],
    historia: 0,
    opcion: "",
  };

  componentWillMount() {
    this.setState({
      cuento : data,
      historia : 1,
    })
  }

  componentDidMount() {
    console.log("Empezando el this.state.cuento");
  }

  componentDidUpdate() {
    console.log(
      `El usuario eligio la historia: ${this.state.historia}${this.state.opcion}`
    );
  }

  seleccionUsuario = (e) => {
    const id = e.target.id;
    if (this.indiceDeHistoria() + 1 >= this.state.cuento.length - 1) {
      alert("Fin.");
    } else {
      this.setState({
        historia: this.state.historia + 1,
        opcion: id.toLowerCase(),
      });
      historial.push(id);
    }
  };

  indiceDeHistoria = () => {
    for (let index = 0; index < this.state.cuento.length; index++) {
      const elemento = this.state.cuento[index];
      if (elemento.id === `${this.state.historia}${this.state.opcion}`) {
        return index;
      }
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.cuento[this.indiceDeHistoria()].historia}</h1>
        <Opciones
          seleccionUsuario={this.seleccionUsuario}
          opcionA={this.state.cuento[this.indiceDeHistoria()].opciones.a}
          opcionB={this.state.cuento[this.indiceDeHistoria()].opciones.b}
        />
        <Recordatorio
          seleccionAnterior={this.state.opcion.toUpperCase()}
          historial={historial.map(
            (opcion, index) => (
              <li key={index}>{opcion}</li>
            ),
            this.state.cuento[this.indiceDeHistoria()].id
          )}
        />
      </div>
    );
  }
}

export default App;
