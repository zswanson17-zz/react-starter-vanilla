import React, { Component } from 'react';
import './Row.css';

export default class Row extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  render() {
    return (
      <div className="Row">{this.props.text}</div>
    );
  }

}
