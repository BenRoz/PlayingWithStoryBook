import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: 1px solid deepskyblue;
  border-radius: 30px;
  background: #3899ec;
  height: 30px;
  outline: none;
  font-size: 1.1em;

  ${props =>
    props.hover &&
    "&:hover {background: #4EB7F5; box-shadow: 0 0 1px transparent;};"};
`;

export { ButtonWrapper };
