import React, { Component } from "react";
import { ButtonKnobsWrapper } from "./style";
import PropTypes from "prop-types";
import {ButtonSizeLabel, ButtonSizeOptions, ButtonSizeDefault, ButtonTypeOptions, ButtonTypeDefault, ButtobTypeLabel } from "../../stories/consts.js";

class Button extends React.Component {
 
  render() {
    const { hover, type, size, isActive, text } = this.props;
    return (
      <ButtonKnobsWrapper
        hover={hover}
        type={type}
        size={size}
        isActive={isActive}
      >
        {text}
      </ButtonKnobsWrapper>
    );
  }
}
Button.propTypes = {
  size: PropTypes.oneOf(ButtonSizeOptions).isRequired,
  type: PropTypes.oneOf(ButtonTypeOptions).isRequired,
  hover: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,

};

export default Button;
