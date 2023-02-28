const RegisterForm = (): JSX.Element => {
  return (
    <>
      <span>Register for the event</span>
      <form>
        <label>
          Email
          <input type="email" placeholder="Introduce your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Introduce your password" />
        </label>
        <label>
          Image
          <input type="file" />
        </label>
        <button>Sign up</button>
      </form>
    </>
  );
};

export default RegisterForm;
