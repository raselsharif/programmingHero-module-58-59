import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";

const Login = () => {
  const { signInEmailPass } = useContext(AuthContext);
  const signInHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signInEmailPass(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={signInHandler}
      className="flex max-w-md mx-auto mt-7 flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
          <Label value="Your email" />
        </div>
        <TextInput
          id="email1"
          placeholder="Your Email"
          required
          type="email"
          name="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Your password" />
        </div>
        <TextInput
          required
          type="password"
          placeholder="Your Password"
          name="password"
        />
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
