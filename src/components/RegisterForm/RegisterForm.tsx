import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled>
      <h2>Register for the event</h2>
      <form>
        <label>
          Email
          <input type="email" placeholder="Introduce your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Introduce your password" />
        </label>
        <label aria-label="Image button">
          Image
          <input type="file" />
        </label>
        <Button text={"Sign up"} />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
