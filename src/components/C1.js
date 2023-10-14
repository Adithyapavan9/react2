import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      prevValue: null,
      operator: null,
      waitingForOperand: false,
    };
  }

  handleDigitClick = (digit) => {
    if (this.state.waitingForOperand) {
      this.setState({
        display: digit,
        waitingForOperand: false,
      });
    } else {
      this.setState({
        display: this.state.display === '0' ? digit : this.state.display + digit,
      });
    }
  };

  handleOperatorClick = (operator) => {
    this.setState({
      prevValue: this.state.display,
      operator: operator,
      waitingForOperand: true,
    });
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      prevValue: null,
      operator: null,
      waitingForOperand: false,
    });
  };

  handleEqualClick = () => {
    if (this.state.operator && this.state.prevValue) {
      const result = eval(`${this.state.prevValue} ${this.state.operator} ${this.state.display}`);
      this.setState({
        display: result,
        prevValue: null,
        operator: null,
        waitingForOperand: true,
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <div className="button-row">
              <button onClick={() => this.handleDigitClick('7')}>7</button>
              <button onClick={() => this.handleDigitClick('8')}>8</button>
              <button onClick={() => this.handleDigitClick('9')}>9</button>
              <button onClick={() => this.handleOperatorClick('+')}>+</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.handleDigitClick('4')}>4</button>
              <button onClick={() => this.handleDigitClick('5')}>5</button>
              <button onClick={() => this.handleDigitClick('6')}>6</button>
              <button onClick={() => this.handleOperatorClick('-')}>-</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.handleDigitClick('1')}>1</button>
              <button onClick={() => this.handleDigitClick('2')}>2</button>
              <button onClick={() => this.handleDigitClick('3')}>3</button>
              <button onClick={() => this.handleOperatorClick('*')}>*</button>
            </div>
            <div className="button-row">
              <button onClick={this.handleClearClick}>C</button>
              <button onClick={() => this.handleDigitClick('0')}>0</button>
              <button onClick={this.handleEqualClick}>=</button>
              <button onClick={() => this.handleOperatorClick('/')}>/</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
