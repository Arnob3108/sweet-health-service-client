import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const SingleReview = ({ review }) => {
  const { userName, email, feedback } = review.reviews;

  return (
    <div class="w-full lg:ml-5 max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="flex justify-center -mt-16 md:justify-end">
        <FaUserCircle className="object-cover w-14 h-14 border-2 border-blue-500 rounded-full dark:border-blue-400"></FaUserCircle>
      </div>

      <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
        {userName}
      </h2>

      <p class="mt-2 text-gray-600 dark:text-gray-200">{feedback}</p>

      <div class="flex justify-end mt-4">
        <p
          class="text-xl font-medium text-blue-600 dark:text-blue-300"
          tabindex="0"
          role="link"
        >
          {email}
        </p>
      </div>
    </div>
  );
};

export default SingleReview;
