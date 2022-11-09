import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const allService = ({ service }) => {
  const { name, img, _id, tagLine, date, time, discription, visit } = service;
  return (
    <div>
      <div className="card lg:w-[90%] h-[90%] bg-base-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition hover:dark:text-white ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500/80 duration-300">
        <figure>
          {/* <img className="w-full h-[20rem]" src={img} alt={name} /> */}
          <PhotoProvider
            src={img}
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <PhotoView src={img}>
              <img src={img} alt={name} className="w-full h-[20rem]" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="mb-2 text-lg font-medium tracking-wide text-gray-300">
            {tagLine}
          </p>
          <p>
            <span className="text-indigo-500 font-semibold">Details: </span>
            {discription.length > 100
              ? discription.slice(0, 100) + "..."
              : discription}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline border-amber-500">{date}</div>
            <div className="badge badge-outline border-amber-500">{time}</div>
          </div>
          <p className="text-2xl">
            <span className="text-2xl">Fee: </span>
            {visit}/TK
          </p>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-ghost w-full text-lg font-semibold glass mt-4">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default allService;
