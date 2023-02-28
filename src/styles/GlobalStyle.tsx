import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
} 
a, a:focus, a:active, a:visited {
  color: inherit;
  text-decoration: none;
}

body{
  margin: 0;
  font-family: ${(props) => props.theme.text.main};
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

input, button{
  font-family: inherit;
  outline: none;
  border: none;
}
`;
