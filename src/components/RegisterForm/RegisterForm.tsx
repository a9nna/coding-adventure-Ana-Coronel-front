import { useState } from "react";
import { User } from "../../types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const initialUserState: User = {
    email: "",
    password: "",
  };

  const formData = new FormData();

  const [userState, setUserState] = useState(initialUserState);

  const handleUserState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({ ...userState, [event.target.name]: event.target.value });
  };

  const handleImageState = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append(event.target.name, event.target.files![0]);
  };

  const isDisabled = userState.email === "" || userState.password === "";

  return (
    <RegisterFormStyled>
      <h2>Register for the event</h2>
      <form>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Introduce your email"
            value={userState.email}
            onChange={handleUserState}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Introduce your password"
            value={userState.password}
            onChange={handleUserState}
          />
        </label>
        <label aria-label="Image button">
          Image
          <input type="file" name="image" onChange={handleImageState} />
        </label>
        <Button isDisabled={isDisabled} text={"Sign up"} />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
