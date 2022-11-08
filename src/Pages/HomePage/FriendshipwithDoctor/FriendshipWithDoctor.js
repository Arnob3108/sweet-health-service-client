import React from "react";
import img from "../../../Assets/doctor1.png";

const FriendshipWithDoctor = () => {
  return (
    <div>
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                Think of the doctor as a friend and share all the problems
                openly.
              </h1>

              <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Contact Now
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full rounded-full lg:max-w-2xl"
              src={img}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendshipWithDoctor;
