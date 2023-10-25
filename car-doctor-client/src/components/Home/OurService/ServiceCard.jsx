import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, title, price, _id } = service;
  return (
    <Card imgSrc={img}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $ {price}
        </span>
        <Link
          to={`/servicedetails/${_id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>Details</p>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
