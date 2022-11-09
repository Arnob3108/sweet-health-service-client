import React from "react";

const ThreeService = ({ service }) => {
  const { name, img, id, tagLine, date, time, discription } = service;
  return (
    <div>
      <div>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={img}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 lg:text-3xl text-xl font-bold text-gray-100">
                {name}
              </p>
              <p className="mb-4 lg:text-xl font-medium tracking-wide text-gray-300">
                {tagLine}
              </p>
              <p className="text-lg tracking-wide text-gray-300">
                {" "}
                <span className="text-indigo-500 font-semibold">Details: </span>
                {discription.length > 100
                  ? discription.slice(0, 100) + "..."
                  : discription}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThreeService;
