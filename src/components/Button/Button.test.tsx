import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import myTheme from "../../styles/myTheme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered and receives the text 'Sign up'", () => {
    test("Then it should show a button with text 'Sign up'", () => {
      const text = "Sign up";
      const isDisabled = true;

      render(
        <ThemeProvider theme={myTheme}>
          <Button isDisabled={isDisabled} text={text}></Button>
        </ThemeProvider>
      );
      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
