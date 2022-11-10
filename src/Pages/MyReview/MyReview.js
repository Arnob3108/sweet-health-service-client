import React from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReview = ({ feedbacks, handleDelete }) => {
  console.log(feedbacks._id);
  const { userName, email, feedback, photo, serviceName, _id } =
    feedbacks.reviews;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;

    const reviews = {
      service: _id,
      serviceName: serviceName,
      userName: userName,
      email,
      feedback,
      photo,
    };

    fetch(
      `https://review-server-arnob3108.vercel.app/reviews/${feedbacks._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("updated Successfull, Reload to see Update!!");
        }
      });
  };

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
      <p class="leading-relaxed dark:text-white">
        {'"'}
        {feedback}
        {'"'}
      </p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
      <h2 class="text-amber-400 font-medium title-font tracking-wider text-xl">
        {userName}
      </h2>
      <p class=" dark:text-white">{serviceName}</p>
      <div className="flex justify-center">
        <div>
          <label htmlFor="my-modal-4" className="btn btn-info btn-outline">
            Edit
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <form onSubmit={handleUpdate} className="w-full">
                <input
                  type="text"
                  name="userName"
                  defaultValue={userName}
                  readOnly
                  placeholder="Your name here"
                  className="input input-bordered input-info w-[80%] ml-[10%]"
                />
                <input
                  type="text"
                  name="email"
                  defaultValue={email}
                  readOnly
                  placeholder="Your email here"
                  className="input input-bordered input-info w-[80%] ml-[10%] my-4"
                />
                <textarea
                  className="textarea textarea-info w-[80%] ml-[10%]"
                  placeholder={feedback}
                  name="feedback"
                ></textarea>
                <button className="btn btn-active btn-ghost hover:bg-indigo-500 hover:dark:text-white w-80 ml-[10%] lg:ml-[10%] ">
                  Update
                </button>
              </form>
            </label>
          </label>
        </div>
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
