import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { signInEmailPass } = useContext(AuthContext);
  const location = useLocation();
  const goTo = useNavigate();
  const signInHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmailPass(email, password)
      .then((result) => {
        // console.log(result.user.email);
        // const loggedInUser = result.user;
        const user = { email };
        console.log(user);

        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
        // goTo(location?.state ? location?.state : "/");
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
