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
  describe("When is rendered and receives isDisabled to true value", () => {
    test("Then it should show a disabled button", () => {
      const text = "Sign up";
      const isButtonDisabled = true;

      render(
        <ThemeProvider theme={myTheme}>
          <Button isDisabled={isButtonDisabled} text={text}></Button>
        </ThemeProvider>
      );
      const disabledButton = screen.getByRole("button", { name: text });

      expect(disabledButton).toBeDisabled();
    });
  });
});
