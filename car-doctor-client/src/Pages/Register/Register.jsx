import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";

const Register = () => {
  const { registerEmailPass, updateUserName } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photo = null;
    console.log(name, email, pass);
    registerEmailPass(email, pass)
      .then((user) => {
        console.log(user.user);
        updateUserName(name, photo)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={handleRegister}
      className="flex max-w-md mx-auto mt-10 flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
          <Label value="Your Name" />
        </div>
        <TextInput placeholder="Your Name" required type="text" name="name" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Your email" />
        </div>
        <TextInput
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
          placeholder="Type new password"
          name="pass"
        />
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
