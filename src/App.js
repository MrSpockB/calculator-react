import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    currentNum: '0',
  }

  onNumButtonClick = number => {
    this.setState(({ currentNum }) => {
      return {
        currentNum: (currentNum === '0') ? number : currentNum + number
      };
    });
  }

  render() {
    const { currentNum } = this.state;
    return (
      <div className="App">
        <h1>Calc</h1>
        <div className="calculator">
          <div className="row">
            <div className="result">{currentNum}</div>
          </div>
          <div className="row">
            <div className="clear-button">clear</div>
            <div className="op-btn">/</div>
            <div className="op-btn">*</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '7')}>7</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '8')}>8</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '9')}>9</div>
            <div className="op-btn">-</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '4')}>4</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '5')}>5</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '6')}>6</div>
            <div className="op-btn">+</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '1')}>1</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '2')}>2</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '3')}>3</div>
            <div className="op-btn">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
