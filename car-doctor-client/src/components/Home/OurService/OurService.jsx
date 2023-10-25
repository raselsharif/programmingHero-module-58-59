import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-11">
      <div className="text-center my-3 max-w-lg mx-auto">
        <h3 className="font-semibold text-xl">Service</h3>
        <h2 className="font-semibold text-2xl my-3">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default OurService;
