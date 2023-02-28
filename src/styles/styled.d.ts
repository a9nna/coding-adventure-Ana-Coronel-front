import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      main: string;
    };

    colors: {
      primary: string;
      error: string;
    };
  }
}
