import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      main: string;
      secondary: string;
      spacing: string;
    };

    colors: {
      primary: string;
      secondary: string;
      title: string;
      inputs: string;
      error: string;
    };
  }
}
