import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import PrivateRoot from "../../Roots/PrivateRoot";
import Reviews from "../Reviews/Reviews";
import Details from "./Details";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { name, img, _id, tagLine, date, time, discription } = service;
  return (
    <div>
      <h1 className="lg:text-6xl text-2xl font-bold text-center my-[2%] dark:text-white">
        {name}
      </h1>
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto mb-[2%]">
        <div className="lg:w-[70%] w-full">
          <Details service={service} key={service._id}></Details>
        </div>

        <div className="w-full lg:w-[30%]">
          <div>
            {user?.uid ? (
              <>
                <div>
                  <h1 className="text-center text-2xl dark:text-white mb-3">
                    Give a Short feedback
                  </h1>
                  <Reviews service={service} key={service._id}></Reviews>
                </div>
              </>
            ) : (
              <div className="text-center ">
                <h1 className="text-4xl capitalize dark:text-white font-bold">
                  Please Sign in to provide feedback
                </h1>
                <Link to="/signin">
                  <button className="btn btn-ghost glass text-2xl dark:text-white bg-indigo-500/80 mt-5">
                    Give Feedback
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className=" bg-fuchsia-100">
            <h1>reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
