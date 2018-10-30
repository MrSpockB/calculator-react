import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstNum: '0',
    currentOp: null,
    secondNum: null
  }

  componentDidMount() {
    window.onkeypress = this.onKeyPress.bind(this);
  }

  onNumButtonClick = number => {
    const { currentOp } = this.state
    const key = (currentOp) ? 'secondNum' : 'firstNum';
    this.setState(({ firstNum, secondNum }) => {
      const currVal = (key === 'firstNum') ? firstNum : secondNum;
      return {
        [key]: (currVal === '0' || currVal === null) ? number : currVal + number
      };
    });
  }

  onKeyPress = e => {
    const { keyCode, key } = e;
    if (keyCode >= 48 && keyCode <= 57) {
      return this.onNumButtonClick(key);
    }
    if (key === '=' || key === 'Enter') {
      return this.onEqualBtnClick();
    }
    if (
      keyCode === 42 ||
      keyCode === 43 ||
      keyCode === 45 ||
      keyCode === 47
    ) {
      return this.setOperation(key);
    }
  }

  setOperation = operation => {
    this.setState({
      currentOp: operation
    });
  }

  onEqualBtnClick = () => {
    const { firstNum, currentOp, secondNum } = this.state;
    const operation = `${firstNum} ${currentOp} ${secondNum}`;
    const val = eval(operation);
    this.setState({
      firstNum: val,
      currentOp: null,
      secondNum: null,
    });
  }

  onClearBtnClick = () => {
    this.setState({
      firstNum: '0',
      currentOp: null,
      secondNum: null,
    });
  }

  renderResult = () => {
    const { firstNum, currentOp, secondNum } = this.state;
    if (!currentOp) {
      return firstNum;
    }
    return `${firstNum} ${currentOp} ${secondNum || ''}`;
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="row">
            <div className="result">{this.renderResult()}</div>
          </div>
          <div className="row">
            <div className="clear-button" onClick={this.onClearBtnClick}>clear</div>
            <div className="op-btn" onClick={this.setOperation.bind(this, '/')}>/</div>
            <div className="op-btn" onClick={this.setOperation.bind(this, '*')}>*</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '7')}>7</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '8')}>8</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '9')}>9</div>
            <div className="op-btn" onClick={this.setOperation.bind(this, '-')}>-</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '4')}>4</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '5')}>5</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '6')}>6</div>
            <div className="op-btn" onClick={this.setOperation.bind(this, '+')}>+</div>
          </div>
          <div className="row">
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '1')}>1</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '2')}>2</div>
            <div className="num-btn" onClick={this.onNumButtonClick.bind(this, '3')}>3</div>
            <div className="op-btn" onClick={this.onEqualBtnClick}>=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
