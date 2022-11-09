import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import Details from "./Details";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, img, _id, tagLine, date, time, discription } = service;
  return (
    <div>
      <h1 className="lg:text-6xl text-2xl font-bold text-center dark:text-white">
        {name}
      </h1>
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto">
        <div className="lg:w-[70%] w-full">
          <Details service={service} key={service._id}></Details>
        </div>
        <div className="w-full lg:w-[30%]">
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
