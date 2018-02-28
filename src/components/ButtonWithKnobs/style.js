import styled from "styled-components";

const ButtonKnobsWrapper = styled.button`
  border: 1px solid deepskyblue;
  border-radius: 30px;
  background: #3899ec;
  width: ${props => {
    switch (props.size) {
      case "big":
        return "300px";
      case "regular":
        return "200px";
      default:
        return "100px";
    }
  }};
  height: 30px;
  outline: none;
  font-size: 1.1em;

  ${props =>
    props.isActive &&
    props.hover &&
    "&:hover {background: #4EB7F5; box-shadow: 0 0 1px transparent;};"};
`;

export { ButtonKnobsWrapper };
