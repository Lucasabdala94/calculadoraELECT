import React from 'react';
import './style.css';
import CalculoMw from './CalculoMw';
import CalculoCorriente from './CalculoCorriente';

export default class App extends React.Component {
  constructor() {
    super();
    this.handleTensionBaja = this.handleTensionBaja.bind(this);
    this.handleTensionMedia = this.handleTensionMedia.bind(this);
    this.handleTensionAlta = this.handleTensionAlta.bind(this);
    this.handlePotencia = this.handlePotencia.bind(this);
    this.state = { corriente: '', niveltension: '' };
  }
  handleTensionBaja(corriente) {
    this.setState({ corriente, niveltension: '13.2' });
  }
  handleTensionMedia(corriente) {
    this.setState({ corriente, niveltension: '33' });
  }
  handleTensionAlta(corriente) {
    this.setState({ corriente, niveltension: '132' });
  }
  handlePotencia(potencia) {
    let corriente = Number(potencia) * 4.37;
    this.setState({
      corriente,
      niveltension: '111',
    });
  }

  render() {
    const corriente = this.state.corriente;
    let corrienteAlta;
    let corrienteMedia;
    let corrienteBaja;
    let potencia;
    if (corriente !== NaN) {
      const corriente = parseFloat(this.state.corriente);
      const niveltension = parseFloat(this.state.niveltension);

      switch (niveltension) {
        case 132:
          corrienteAlta = corriente.toString();
          corrienteMedia = (corriente * (17.5 / 4.37)).toFixed(2).toString();
          corrienteBaja = (corriente * 10).toFixed(2).toString();
          potencia = (corriente / 4.37).toFixed(2).toString();

          break;
        case 33:
          corrienteAlta = (corriente * (4.37 / 17.5)).toFixed(2).toString();
          corrienteMedia = corriente.toString();
          corrienteBaja = (corriente * (43.7 / 17.5)).toFixed(2).toString();
          potencia = (corriente / 17.5).toFixed(2).toString();

          break;
        case 13.2:
          corrienteAlta = (corriente / 10).toString();
          corrienteMedia = (corriente * (17.5 / 43.7)).toFixed(2).toString();
          corrienteBaja = corriente.toString();
          potencia = (corriente / 43.7).toFixed(2).toString();

          break;
        case 111:
          if (corriente > 0) {
            corrienteAlta = corriente.toFixed(2).toString();
            corrienteMedia = (corriente * (17.5 / 4.37)).toFixed(2).toString();
            corrienteBaja = (corriente * 10).toFixed(2).toString();
            potencia = (corriente / 4.37).toString();
          }
          break;
      }
    }
    return (
      <div>
        <h1 className="titulo">Conversor de Potencia y Corrientes</h1>
        <div className="container">
          <CalculoMw potencia={potencia} handlePotencia={this.handlePotencia} />
          <CalculoCorriente
            CambiaCorriente={this.handleTensionAlta}
            tension="132 kv"
            corriente={corrienteAlta}
          />
          <CalculoCorriente
            CambiaCorriente={this.handleTensionMedia}
            tension="33 kv"
            corriente={corrienteMedia}
          />
          <CalculoCorriente
            CambiaCorriente={this.handleTensionBaja}
            tension="13.2 kv"
            corriente={corrienteBaja}
          />
        </div>
      </div>
    );
  }
}
