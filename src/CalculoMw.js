import React from 'react';

export default class CalculoMv extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handlePotencia(e.target.value);
  }

  render() {
    /* 
      return <h3>La potencia es: {potencia !== '0' ? potencia : '0'} MW</h3>;
    } */
    let potencia = this.props.potencia;
    if (potencia != 0) {
      return (
        <div className="fieldset">
          <legend>Potencia en MW :</legend>
          <input
            className="input"
            value={round(potencia)}
            onChange={this.handleChange}
            type="number"
          />
        </div>
      );
    } else {
      return (
        <div className="fieldset">
          <legend>Potencia en MW :</legend>
          <input className="input" onChange={this.handleChange} type="number" />
        </div>
      );
    }
  }
}

function round(num, decimales = 2) {
  var signo = num >= 0 ? 1 : -1;
  num = num * signo;
  if (decimales === 0)
    //con 0 decimales
    return Math.round(num);
  // round(x * 10 ^ decimales)
  num = num.toString().split('e');
  num = Math.round(
    +(num[0] + 'e' + (num[1] ? +num[1] + decimales : decimales))
  );
  // x * 10 ^ (-decimales)
  num = num.toString().split('e');
  return signo * (num[0] + 'e' + (num[1] ? +num[1] - decimales : -decimales));
}
