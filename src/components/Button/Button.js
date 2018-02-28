import React, { Component } from "react";
import { ButtonWrapper } from "./Button_style";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  update(num) {
    this.setState({
      count: this.state.count + num
    });
  }

  render() {
    return (
      <div>
        <ButtonWrapper
          hover={true}
          onClick={() => this.update(-1)}
          id="minus"
        >
          -
        </ButtonWrapper>
        <ButtonWrapper
          hover={true}
          onClick={() => this.update(1)}
          id="plus"
        >
          +
        </ButtonWrapper>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Button;
