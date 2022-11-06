import React from "react";

const ServiceCart = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="p-6">
        <img className="rounded-[10px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <p className="text-orange-500">Price:${price}</p>
          <button className="text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
