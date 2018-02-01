import React, { Component } from 'react';
import Row from './Row';
import './App.css';
import Logo from '../../images/logo.svg';

export default class App extends Component {

  getRows() {
    const rows = [];
    rows.push(<Row key="getRows1" text="1" />);
    rows.push(<Row key="getRows2" text="2" />);
    rows.push(<Row key="getRows3" text="3" />);
    return rows;
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <img src='../images/test.png' />
        <h1>React Starter - Vanilla</h1>
        {this.getRows()}
      </div>
    );
  }

}
