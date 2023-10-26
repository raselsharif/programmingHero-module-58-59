import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";

const Login = () => {
  const { signInEmailPass } = useContext(AuthContext);
  const signInHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email);
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
          name="name"
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
          name="email"
        />
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
