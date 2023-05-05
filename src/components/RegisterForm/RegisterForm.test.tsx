import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import myTheme from "../../styles/myTheme";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When is rendered", () => {
    test("Then it should show a tittle with text 'Register for the event'", () => {
      const text = /register for the event/i;

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const title = screen.getByRole("heading", { name: text, level: 2 });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show an input with text 'Introduce your email'", () => {
      const text = /introduce your email/i;

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const emailInput = screen.getByPlaceholderText(text);

      expect(emailInput).toBeInTheDocument();
    });

    test("Then it shoul show an input with text 'Introduce your password'", () => {
      const text = /introduce your password/i;

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const passwordInput = screen.getByPlaceholderText(text);

      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show an input with label with text 'Image button'", () => {
      const text = /image button/i;

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const imageLabel = screen.getByLabelText(text);

      expect(imageLabel).toBeInTheDocument();
    });

    test("Then it should show a button with text 'Sign up'", () => {
      const text = /sign up/i;

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
  describe("When is wrote 'ana@ana.com' in the email input", () => {
    test("Then it should show the value 'ana@ana.com'", () => {
      // const text = "ana@ana.com";

      render(
        <ThemeProvider theme={myTheme}>
          <RegisterForm />
        </ThemeProvider>
      );

      // const emailInput = fireEvent.change(), {
      //   target:
      // })
    });
  });
});
