import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calc</h1>
        <div className="calculator">
          <div className="row">
            <div className="result">0</div>
          </div>
          <div className="row">
            <div className="clear-button">clear</div>
            <div className="op-btn">/</div>
          </div>
          <div className="row">
            <div className="num-btn">7</div>
            <div className="num-btn">8</div>
            <div className="num-btn">9</div>
            <div className="op-btn">-</div>
          </div>
          <div className="row">
            <div className="num-btn">4</div>
            <div className="num-btn">5</div>
            <div className="num-btn">6</div>
            <div className="op-btn">+</div>
          </div>
          <div className="row">
            <div className="num-btn">1</div>
            <div className="num-btn">2</div>
            <div className="num-btn">3</div>
            <div className="op-btn">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
