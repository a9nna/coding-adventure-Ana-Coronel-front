import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: ${(props) => props.theme.text.spacing};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 48px;
    overflow: hidden;

    label {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.colors.title};

      input {
        margin-top: 9px;
        height: 40px;
        letter-spacing: ${(props) => props.theme.text.spacing};
        background-color: ${(props) => props.theme.colors.inputs};
        border: 1px solid ${(props) => props.theme.colors.title};
        border-radius: 8px;
      }
    }
  }
`;

export default RegisterFormStyled;
