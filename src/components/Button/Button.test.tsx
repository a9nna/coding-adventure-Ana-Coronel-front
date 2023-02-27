import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered and receives the text 'Sign up'", () => {
    test("Then it should show a button with text 'Sign up'", () => {
      const text = "Sign up";

      render(<Button text={text}></Button>);
      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
