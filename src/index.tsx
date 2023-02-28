import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle";
import "@fontsource/saira-stencil-one/400.css";
import "@fontsource/roboto/400.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import myTheme from "./styles/myTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
