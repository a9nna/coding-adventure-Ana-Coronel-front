import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 80%;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:disabled {
    opacity: 0.57;
  }

  @media (min-width: 900px) {
    height: 57px;
  }
`;

export default ButtonStyled;
