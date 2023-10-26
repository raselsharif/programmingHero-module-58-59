import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkoutLoaded = useLoaderData();
  const { _id, title } = checkoutLoaded;
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const lName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const comments = form.comments.value;

    const checkOutInfo = {
      name,
      lName,
      phone,
      email,
      comments,
      serviceId: _id,
    };
    console.log(checkOutInfo);
  };

  return (
    <div>
      <h2 className="text-center py-3 bg-orange-700 font-semibold text-xl text-white">
        Service For: {title}
      </h2>
      <form
        onSubmit={handleCheckout}
        className="flex max-w-4xl mx-auto flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div>
              <div className="mb-2 block">
                <Label value="First Name" />
              </div>
              <TextInput
                placeholder="First Name"
                required
                type="text"
                name="name"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Phone No" />
              </div>
              <TextInput
                placeholder="Phone No"
                required
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div>
            <div>
              <div className="mb-2 block">
                <Label value="Last Name" />
              </div>
              <TextInput
                placeholder="Last Name"
                required
                type="text"
                name="lastName"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Email" />
              </div>
              <TextInput
                placeholder="Your Email"
                required
                type="email"
                name="email"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label value="Your message" />
          </div>
          <Textarea
            placeholder="Leave a comment..."
            required
            rows={6}
            name="comments"
          />
        </div>
        <Button type="submit">Order Confirm</Button>
      </form>
    </div>
  );
};

export default Checkout;
