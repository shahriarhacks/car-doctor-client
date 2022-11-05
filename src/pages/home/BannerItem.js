import React from "react";
import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-image">
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute text-white flex justify-start transform -translate-y-1/2 left-24 top-[35%]">
          <h1 className="text-6xl font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute text-white flex justify-start transform -translate-y-1/2 left-24 top-[55%]">
          <p className="text-xl">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute text-white flex justify-start transform -translate-y-1/2 left-24 top-[65%]">
          <Link to="/services">
            <button className="btn btn-warning mr-5">Discover More</button>
          </Link>
          <Link to="/blog">
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </Link>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href={`#slide${prev}`} className="btn btn-circle mx-3">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
