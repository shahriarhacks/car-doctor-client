import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-center mb-12">
        <p className="text-[#FF3811] text-xl font-bold">Services</p>
        <h2 className="text-5xl font-bold my-3">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          <br /> humour, or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-12">
        <Link to="/services">
          <button className="btn btn-outline btn-warning ">
            More Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default Services;
