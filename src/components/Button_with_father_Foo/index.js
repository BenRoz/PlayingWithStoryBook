import React, { Component } from "react";
import { ButtonWrapper } from "../Button/Button_style";

class Button extends React.Component {
  render() {
    return (
      <div>
        <ButtonWrapper
          hover={true}
          onClick={() => this.props.onUpdate(-2)}
          id="minus"
        >
          -
        </ButtonWrapper>
        <ButtonWrapper
          hover={true}
          onClick={() => this.props.onUpdate(1)}
          id="plus"
        >
          +
        </ButtonWrapper>
        <span>{this.props.count}</span>
      </div>
    );
  }
}

export default Button;
