import React from 'react';

export default class CalculoCorriente extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value !== NaN) {
      this.props.CambiaCorriente(e.target.value);
    }
  }

  render() {
    let corriente = this.props.corriente;
    return (
      <div className="fieldset">
        <legend>Corriente en {this.props.tension} :</legend>
        <input
          className="input"
          value={corriente ? corriente : ''}
          onChange={this.handleChange}
          type="number"
        />
      </div>
    );
  }
}
