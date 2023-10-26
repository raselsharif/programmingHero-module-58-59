import { Button } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const ServiceDetails = () => {
  const loadedServices = useLoaderData();
  const { img, title, description, price, _id } = loadedServices;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
        <Link to={`/checkout/${_id}`}>
          <Button>
            <p>Proceed Checkout</p>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
