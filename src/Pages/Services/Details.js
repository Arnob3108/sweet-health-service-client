import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Details = ({ service }) => {
  const { name, img, _id, tagLine, date, time, discription, visit } = service;
  return (
    <div className=" dark:text-white">
      <div className="w-full lg:h-[40rem]">
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
            <img
              src={img}
              alt={name}
              className="w-full lg:w-[80%] mx-auto rounded-3xl h-full"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div>
        <h1 className="lg:text-4xl text-2xl font-bold my-5">{name}</h1>
        <h2 className="lg:text-2xl text-xl font-semibold dark:text-indigo-400 capitalize">
          {tagLine}
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-between text-xl font-semibold dark:text-amber-400 my-6 bg-indigo-400/50 py-2 px-3 rounded-2xl shadow-2xl shadow-indigo-400/50">
          <p>
            <span className="dark:text-white">Visiting Date: </span>
            {date}
          </p>
          <p>
            <span className="dark:text-white">Visiting Fee: </span>
            {visit}
          </p>
          <p>
            <span className=" dark:text-white">Visiting Time: </span>
            {time}
          </p>
        </div>
        <p className="text-lg tracking-wide text-justify font-medium">
          <span className="text-2xl dark:text-indigo-400 font-semibold">
            About Disease:{" "}
          </span>
          {discription}
        </p>
      </div>
    </div>
  );
};

export default Details;
