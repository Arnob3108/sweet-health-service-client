import React from "react";
import { FaUserCircle } from "react-icons/fa";

const MyReview = ({ feedbacks, handleDelete }) => {
  console.log(feedbacks._id);
  const { userName, email, feedback, photo, serviceName } = feedbacks.reviews;
  return (
    <div class="h-full text-center">
      {photo ? (
        <img
          alt="testimonial"
          class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={photo}
        />
      ) : (
        <FaUserCircle className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"></FaUserCircle>
      )}
      <p class="leading-relaxed dark:text-white">{feedback}</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
      <h2 class="text-amber-400 font-medium title-font tracking-wider text-xl">
        {userName}
      </h2>
      <p class=" dark:text-white">{serviceName}</p>
      <div>
        <button className="btn btn-info btn-outline">Edit</button>
        <button
          onClick={() => handleDelete(feedbacks._id)}
          className="btn btn-error btn-outline ml-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyReview;
